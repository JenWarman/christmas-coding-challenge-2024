// getTweetData(tweet)

// Takes a string representing a tweet and returns an object containing key data about the tweet, including its length, the count and array of unique hashtags, and the count and array of unique mentions.

// Arguments
// tweet (string): A string representing the tweet.

// Returns
// (Object): An object containing:

// tags (Array): An array of unique hashtags.
// mentions (Array): An array of unique mentions.
// tagCount (number): The count of unique hashtags.
// mentionCount (number): The count of unique mentions.
// length (number): The length of the tweet.


function getTweetData(tweet) {
    if (!tweet) {
      return {};
    }
    const mentions = tweet.match(/@[^\s]+/g) || [];
    const tags = tweet.match(/#[^\s]+/g) || [];
  
    let tweetObj = {
      tags: tags,
      mentions: mentions, 
      tagCount: tags.length, 
      mentionCount: mentions.length, 
      length: tweet.length,
    }
    return tweetObj;
  }
  
  module.exports = getTweetData;