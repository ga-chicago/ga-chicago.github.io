class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.date :date
      t.float :miles
      t.integer :duration
      t.string :location
      t.string :weather
      t.text :description

      t.timestamps null: false
    end
  end
end
