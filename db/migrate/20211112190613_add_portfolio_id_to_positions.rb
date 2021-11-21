class AddPortfolioIdToPositions < ActiveRecord::Migration[5.2]
  def change
    add_reference :stocks_positions, :portfolio, index: true
  end
end
