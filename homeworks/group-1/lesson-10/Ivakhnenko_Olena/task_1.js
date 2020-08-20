const axios = require('axios');

const {data: posts} = await axios.get('http://jsonplaceholder.typicode.com/posts');
const {data: users} = await axios.get('http://jsonplaceholder.typicode.com/users');

if (!users.some(user => user.email === 'saa@shaa.com')) {
    const { data: newUser } = await axios.post('http://jsonplaceholder.typicode.com/users', {
        "id": 11,
        "name": "Melissa Shaarm",
        "username": "Mel",
        "email": "shaa@melissa.com",
        "address": {
            "street": "Kulas Nignt",
            "suite": "Apt. 6",
            "city": "Berlin",
            "zipcode": "3333-3874",
            "geo": {
                "lat": "-53.3159",
                "lng": "38.1496"
            }
        },
        "phone": "3-258-258-258-22",
        "website": "melissa.work",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    });

    users.push(newUser);
}


function User(id, name, email, posts, postsCount) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.posts = posts;
    this.postsCount = postsCount;
}

function TopUser(id, name, email, postsCount) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.postsCount = postsCount;
}

function usersList(users, posts) {
    const resultArray = [];
    for (let j=0; j < users.length; j++) {
        let postsForUser = findPostsForUser(posts, users[j].id);
        resultArray.push(new User(users[j].id, users[j].name, users[j].email, postsForUser.postsForUser, postsForUser.postsCount));
    }
    return resultArray;
}

function topThreeUsers(users) {
    let arrayTemp = sortByPostsCount(users);
    return arrayTemp.map((value, index) => {
        if (index <= 2) {
            return new TopUser(value.id, value.name, value.email, value.postsCount);
        }
    })
}

function findPostsForUser(posts, userId) {
    let postsForUser = [];
    let postsCount = 0;
    for (let i=0; i < posts.length; i++) {
        if (posts[i]["userId"] === userId) {
            posts[i].title.substr(0,50);
            postsForUser.push(posts[i]);
            postsCount++;
        }
    }
    return { postsForUser: postsForUser, postsCount: postsCount };
}

function sortByPostsCount(array, property) {
    return array.sort((a, b) => {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }
        return 0;
    });
}

console.log(usersList(users, posts));
console.log(topThreeUsers(usersList(users,posts)));
