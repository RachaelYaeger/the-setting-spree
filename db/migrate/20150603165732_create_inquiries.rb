class CreateInquiries < ActiveRecord::Migration
  def change
    create_table :inquiries do |t|
      t.string :name
      t.string :email
      t.string :datetime
      t.string :budget
      t.string :message
      t.string :customer_type

      t.timestamps null: false
    end
  end
end
