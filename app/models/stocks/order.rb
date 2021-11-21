class Stocks::Order < ApplicationRecord
  include Stocks
  self.inheritance_column = nil

  # Create other items later on?
  # Will make need logic for market_limit and limit_order
  BUY = 'buy'.freeze
  SELL = 'sell'.freeze
  MARKET_LIMIT = 'market_limit'.freeze
  LIMIT_ORDER = 'limit_order'.freeze

  enum type: Hash[[BUY, SELL, MARKET_LIMIT, LIMIT_ORDER].map{|k| [k, k]}]

  validates_presence_of :user, :company_ticker, :shares

  belongs_to :user, class_name: 'User'

  ### Add all helper methods here
  # Do I want a before create method that will validate sufficient funds for the purchase, or do I
  # want to let them put in an order and check before the task is executed to abort?
end
