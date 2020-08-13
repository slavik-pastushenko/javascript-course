
const { get, post, put } = axios;
const users = "http://jsonplaceholder.typicode.com/users";
const posts = "http://jsonplaceholder.typicode.com/posts";
const newUser = {
    "id": 20,
    "name": "shaa melissa",
    "username": "melissa",
    "email": "shaa@melissa.com",
    "address": {
        "street": "shaa melissa",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    }
}
async function usersIfo(usersDB, postDB) {
    try {
        const usersInfo = await get(usersDB)
            .then((response) => response.data);
        if (usersInfo.some(item => item.email !== "shaa@melissa.com")) {
            const addUser = await post(usersDB, newUser).then(response => response);
            usersInfo.push(addUser.data);
            alert(`user shaa melissa doesn't find and ${(addUser.statusText).toLowerCase()}`)
        } else {
        }
        const postInfo = await get(postDB)
            .then((response) => response.data);
        usersInfo.forEach((item, index) => {
            usersInfo[index].postsList = postInfo.filter(item => item.userId === index + 1);
            usersInfo[index].postsList.forEach(item => {
                let { title } = item;
                title = title.substr(0, 50);
            })
        });
        const finallyUser = usersInfo.map(item => {
            const filtredUsers = {
                id: item.id,
                name: item.name,
                email: item.email,
                posts: item.postsList,
                postsCount: item.postsList.length
            }
            return filtredUsers
        })
        console.log(finallyUser)
    } catch (err) {
        alert(err);
    }
}
usersIfo(users, posts)

