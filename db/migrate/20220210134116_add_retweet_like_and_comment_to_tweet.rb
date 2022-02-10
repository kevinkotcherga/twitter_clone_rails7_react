class AddRetweetLikeAndCommentToTweet < ActiveRecord::Migration[7.0]
  def change
    add_column :tweets, :retweet, :integer
    add_column :tweets, :like, :integer
  end
end
