class Api::TweetsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Tweet.all
    end
end
