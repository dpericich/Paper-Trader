class Api::V1::ArticlesController < ApplicationController

  protect_from_forgery with: :null_session

  def index
    articles = Article.all
    render(json: ArticleSerializer.new(articles))
  end

  def show
    article = Article.find(params[:id])
    render(json: ArticleSerializer.new(article))
  end

  def new
    article = Article.new
    render(json: article)
  end

  def create
    article = Article.new(article_params)
    if article.create!
      # render json: { article }, options
      render json: article
    else
      render json: { errors: airline.errors.messages }, status: 422
    end
  end

  def edit
    article = Article.find_by(params[:id])
    if article.exists?
      # render json: { article }, options
      render json: article
    else
      render json: { errors: airline.errors.messages}, status: 422
    end
  end

  def delete
    article = Article.find_by(params[:id])
    if article.destroy
      head :no_content
    else
      render json: { errors: article.errors.messages }, status: 422
    end
  end

  private
    def article_params
      params.require(:article).permit(:title, :description)
    end

    def options
      # @options = { include: %i[reviews] }
      "this is a placeholder"
    end
end
