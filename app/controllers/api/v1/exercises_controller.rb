# comment for codeclimate
class Api::V1::ExercisesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authorize_user, except: [:index, :show, :create]

  def index
    @exercises = Exercise.all
    @exercises = @exercises.select { |x| x.name.length > 1 }
    @exercises = @exercises.select { |x| x.description.length > 1 }
    render json: { exercises: @exercises }
  end

  def show
    @exercise = Exercise.find(params[:id])
    render json: @exercise
  end
end
