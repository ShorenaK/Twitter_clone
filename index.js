import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
    tweetInput.value = ''
})

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
                        data-repy="${tweet.uuid}"
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
console.log(getFeedHtml())
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