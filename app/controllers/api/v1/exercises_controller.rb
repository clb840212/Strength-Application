# comment for codeclimate
class Api::V1::ExercisesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authorize_user, except: [:index, :show, :create]

  def index
    render json: { exercises: Exercise.all }
  end

  def show
    @exercise = Exercise.find(params[:id])
  end
end
