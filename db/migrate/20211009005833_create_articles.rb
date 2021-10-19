class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :article_text

      t.timestamps

      t.references :user, foreign_key: true, index: { name: 'idx_article_author' }
    end
  end
end
