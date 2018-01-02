class Workouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.datetime :date
      t.string :workout
      t.string :length
      t.string :mood

      t.timestamps
    end
  end
end
