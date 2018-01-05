class AddIdToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :workout_id, :integer
  end
end
