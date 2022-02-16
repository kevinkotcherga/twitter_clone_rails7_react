class TweetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :retweet, :like
end
