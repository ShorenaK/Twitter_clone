import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')

tweetBtn.addEventListener('click', function(){
    tweetInput.value = ''
})
// document response the click on entire page 
document.addEventListener('click', function(e){
  if(e.target.dataset.like){
    handleLikeclick(e.target.dataset.like)
} 
if(e.target.dataset.retweet){
    handleRetweetClick(e.target.dataset.retweet)
}
    // console.log("reply",e.target.dataset.reply)
})

function handleLikeclick(tweetId){
    const targetTweetObj =
     tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0] // returns object 

 if(targetTweetObj.isLiked === true){
    targetTweetObj.likes --   // dec the likes
  
 }else {
    targetTweetObj.isLiked === false
    targetTweetObj.likes ++
   
 }

 targetTweetObj.isLiked = !targetTweetObj.isLiked // flipes boolean
    render()  
}

function handleRetweetClick(tweetId){
 const targetTweet = 
 tweetsData.filter(function(tweet){
    return tweet.uuid === tweetId
 })[0]
 if(targetTweet.isRetweeted === true){
    targetTweet.retweets -- 
 }else{
    targetTweet.isRetweeted === false
    targetTweet.retweets ++
 }
 targetTweet.isRetweeted = !targetTweet.isRetweeted
  render()
}

function getFeedHtml(){
    let feedHmlt = ``
    tweetsData.forEach(function(tweet){
        feedHmlt += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">

                        <i class= "fa-regular fa-comment-dots"
                        data-reply="${tweet.uuid}"
                        > </i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">

                        <i class= "fa-solid fa-heart"
                        data-like="${tweet.uuid}"
                         ></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">

                        <i class= "fa-solid fa-retweet" 
                        data-retweet="${tweet.uuid}"
                        > </i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`
    })
return feedHmlt
}
// console.log(getFeedHtml())
getFeedHtml()

function render(){
   feed.innerHTML =  getFeedHtml()
//    document.getElementById('feed').innerHTML = getFeedHtml()
}
render()

// tweetsData.forEach(function(tweet){
//      tweet.replies.forEach(function(reply){
//         console.log(reply)
//      })
// })