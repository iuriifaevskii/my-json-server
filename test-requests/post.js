// get all posts
fetch('/posts', {
    method: 'GET',
})
.then(response => response.json())
.then(json => console.log(json));

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