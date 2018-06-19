// get all posts
fetch('/posts', {
    method: 'GET',
})
.then(response => response.json())
.then(json => console.log(json));

// get single post
fetch('/posts/1000', {
    method: 'GET',	
})
.then(response => response.json())
.then(json => console.log(json))

// get comments by post
fetch('/posts/1000/comments', {
    method: 'GET',	
})
.then(response => response.json())
.then(json => console.log(json))

// create post using test data
fetch('/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'basr',
        userId: 3000
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));

// update post
fetch('/posts/1019', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'foo111',
        body: 'basr222',
        userId: 3000
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))

// remove post
fetch('/posts/1020', {
    method: 'DELETE'
})
.then(response => response.json())
.then(json => console.log(json))
