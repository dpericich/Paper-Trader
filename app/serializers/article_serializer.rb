class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :title, :article_text, :id
  attribute :published_at do |object|
    object.created_at.to_date
  end

  attribute :blurb do |object|
    object.article_text.split(" ")[0..38].join(" ") + "..."
  end

  attribute :username do |object|
    object.user.username
  end

  # belongs_to :author, record_type: :user
  belongs_to :user

end
