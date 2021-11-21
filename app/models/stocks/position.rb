class Stocks::Position < ApplicationRecord
  include Stocks

  validates_presence_of :user_id, :price_per_share, :shares

  # TODO : Will want to add in company_id once that model is created
  # Do I want to associated a position with a User? => benefits of calling it directly instead of throught a portfolio
  belongs_to :user, class_name: "User"
  belongs_to :portfolio, class_name: "Stocks::Portfolio"
  has_many :positions, class_name: "Stocks::Position"

  # TODO : Determine better name for this
  def total_value
    value = (shares * price_per_share).to_f
  end
end
