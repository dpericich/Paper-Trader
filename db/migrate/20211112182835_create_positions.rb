class CreatePositions < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks_positions do |t|
      t.string :company_name
      t.integer :shares
      t.decimal :price_per_share

      t.references :user
      t.timestamps
    end
  end
end
