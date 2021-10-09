class User < ApplicationRecord
  validate_presence_of :first_name, :username
end
