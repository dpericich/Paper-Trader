class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks_portfolios do |t|

      t.references :user
      t.timestamps
    end
  end
end
