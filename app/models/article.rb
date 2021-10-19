class Article < ApplicationRecord
  # alias_attribute :user, :author
  belongs_to :user
end
