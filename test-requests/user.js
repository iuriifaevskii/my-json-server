// get all users
fetch('/users', {
    method: 'GET',
})
.then(response => response.json())
.then(json => console.log(json));
