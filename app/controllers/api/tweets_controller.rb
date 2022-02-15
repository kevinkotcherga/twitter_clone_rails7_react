class Api::TweetsController < ApplicationController
    skip_before_action :authenticate_user

  def index
      @tweets = Tweet.all
      render json: @tweets
  end

     # GET /tweets/1 or /tweets/1.json
  def show
    render json: @book
  end

  # GET /tweets/new
  def new
    render json: Tweet.new
  end

  # POST /tweets or /tweets.json
  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      render json: @tweet, status: :created
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tweets/1 or /tweets/1.json
  def update
    if @tweet.update(tweet_params)
      render json: @tweet
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tweets/1 or /tweets/1.json
  def destroy
    @tweet.destroy
    if @tweet.destroy
      head :no_content, status: :ok
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tweet
      @tweet = Tweet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tweet_params
      params.require(:tweet).permit(:content, :retweet, :like)
    end
end
