class Stocks::Portfolio < ApplicationRecord
  include Stocks

  belongs_to :user, class_name: "User"
  has_many :positions, class_name: "Stocks::Position"

  # TODO : Come up with better name
  def total_value
    positions.reduce(0){ |total, position| total + position.total_value }.to_f
  end
end
