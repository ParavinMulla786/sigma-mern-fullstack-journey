//Object Literals -
//twitter post includes
/*username
content 
likes
reposts
like */

const post = {
    username : "@Paravin",
    content:"This is my #first Post",
    likes:500,
    reposts:20,
    tags:["@apana College" , "@sigma"]
}
console.log(post)



//get value
//using dot notation
console.log(post.content);


// using brakety notation
console.log(post["username"]);