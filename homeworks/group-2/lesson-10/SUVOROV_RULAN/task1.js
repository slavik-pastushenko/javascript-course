const axios = require('axios');

async function getUsers() {
    const {data: users} = await axios.get('http://jsonplaceholder.typicode.com/users');

    const isEmailExists = users.filter(user => user.email === 'shaa@melissa.com');

    if (!isEmailExists.length) {
        const { data: newUser } = await axios.post('http://jsonplaceholder.typicode.com/users', {
            "name":"Shaa Melissa",
            "email":"shaa@melissa.com"
        });
        users.push(newUser);
        }
    return users;
};

async function getPosts() {
    const { data: posts } = await axios.get('http://jsonplaceholder.typicode.com/posts');
    
    return posts.map(post => ({
        ...post,
        title: post.title.length > 50
        ? post.title.slice(0, 49)
        : post.title
    }));
};

function getUsersWithPosts() {
    const posts = getPosts();
    return getUsers().map(user => {
        const userPosts = posts.filter(post => post.userId === user.id);
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            posts: userPosts,
            postsCount: userPosts.length
        };
    });
}
console.log (getUsersWithPosts())

function getTopThreeUsets(){
    return getUsersWithPosts()
    .sort((a,b) => a.postsCount>b.postsCount ? 1 : -1)
    .splise(getUsersWithPosts().length-3)
    .map(user=>{
        return {
        id: user.id,
        name: user.name,
        email: user.email,
        totalPosts: user.postsCount
        }
    });
}
console.log (getTopThreeUsets())

//Worked
const axios = require('axios');

    const {data: users} = await axios.get('http://jsonplaceholder.typicode.com/users');

    const isEmailExists = users.filter(user => user.email === 'shaa@melissa.com');

    if (!isEmailExists.length) {
        const { data: newUser } = await axios.post('http://jsonplaceholder.typicode.com/users', {
            "name":"Shaa Melissa",
            "email":"shaa@melissa.com"
        });
        users.push(newUser);
        }
    const { data: posts } = await axios.get('http://jsonplaceholder.typicode.com/posts');
    
    posts.map(post => ({
        ...post,
        title: post.title.length > 50
        ? post.title.slice(0, 49)
        : post.title
    }));

    const usersListWithPosts = users.map(user => {
        const userPosts = posts.filter(post => post.userId === user.id);
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            posts: userPosts,
            postsCount: userPosts.length
        };
    });
console.log (usersListWithPosts)

function getTopThreeUsets(){
    return usersListWithPosts
    .sort((a,b) => a.postsCount<b.postsCount ? 1 : -1)
    .splice(3)  //на runkit не обрезает почему-то
    .map(user=>{
        return {
        id: user.id,
        name: user.name,
        email: user.email,
        totalPosts: user.postsCount
        }
    });
}
console.log (getTopThreeUsets())