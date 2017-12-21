class Exercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.string :equipment
      t.string :description, null: false
      t.string :muscles, null: false

      t.timestamps
    end
  end
end
