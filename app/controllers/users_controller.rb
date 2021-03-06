# controller
class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user, except: [:show]

  def index
    @users = User.all
  end

  def show
    @user = User.find(current_user.id)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    flash[:notice] = 'User deleted'
    redirect_to users_path
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      redirect_to root_path
      flash[:notice] = 'Access Denied'
    end
  end
end
