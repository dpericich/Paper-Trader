class User < ApplicationRecord
  TRADER = 'trader'.freeze
  ADMIN = 'admin'.freeze

  enum role: Hash[[TRADER, ADMIN].map{|k| [k, k]}]
  validates_presence_of :first_name, :username, :role
  # https://railsapps.github.io/rails-authorization.html

end
