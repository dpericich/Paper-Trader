class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks_orders do |t|
      t.string :company_ticker
      t.integer :shares
      t.bigint :price
      t.string :type

      t.references :user
      t.timestamps
    end
  end
end
