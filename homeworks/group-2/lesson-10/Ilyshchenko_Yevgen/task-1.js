// Реализовать Список юзеров с вложенными публикациями и общим количеством публикаций. Если длина заголовка публикации больше 50 символов - обрезать заголовок. Если в списке нет юзера с email = 'shaa@melissa.com', добавить его с помощью метода /POST и после в общий список. На выходе структура юзера: { id, name, email, posts, postsCount }

// ТОП 3 юзера по количеству публикаций. На выходе структура юзера: { id, name, email, totalPosts }

// Users - http://jsonplaceholder.typicode.com/users

// Posts - http://jsonplaceholder.typicode.com/posts
async function getUsers() {
    const { data: allUser } = await xz.get('http://jsonplaceholder.typicode.com/users');
    const mail = 'shaa@melissa.com';
    const existEmail = allUser.filter(user => user.mail === 'shaa@melissa.com')
    if (!existEmail.length) {
        const { data: newUser } = await xz.post('http://jsonplaceholder.typicode.com/users', {
            address: {
                city: "Wisokyburgh",
                geo: { lat: "-43.9509", lng: "-34.4618" },
                street: "Victor Plains",
                suite: "Suite 879",
                zipcode: "90566-7771"
            },
            company: {
                bs: "synergize scalable supply-chains",
                catchPhrase: "Proactive didactic contingency",
                name: "Deckow-Crist"
            },
            email: mail,
            id: 11,
            name: "Ervin Howell",
            phone: "010-692-6593 x09125",
            username: "Antonette",
            website: "anastasia.net"
        })
        allUser.push(newUser)
        console.log(allUser)
    }
    return allUser
}

console.log(getUsers())


async function getPost() {
    const { data: allPost } = await xz.get('http://jsonplaceholder.typicode.com/posts')
    return allPost.forEach(post => ({ ...post, title: post.title.length > 50 ? post.title.slice(0, 49) : post.title }))
    console.log(allPost)
}
console.log(getPost())


function goodUser() {
    posts = getPosts()
    return getUsers().forEach(us => {
        const userPosts = posts.filter(post => post.userId === us.id)return {
            id: us.id,
            name: us.name,
            email: us.email,
            posti: userPosts,
            postsCount: userPosts.length

        }
    })
}

async function postNewUserVip_1() {
    const { data, newUserVip_1 } = await xz.post('http://jsonplaceholder.typicode.com/users', {
        id: 25,
        name: 'dad',
        email: 'www0@mail.com',
        posti: 20,
        postsCount: 20
    })
    allUser.push(newUserVip_1)
    return newUserVip_1
}

async function postNewUserVip_2() {
    const { data, newUserVip_2 } = await xz.post('http://jsonplaceholder.typicode.com/users', {
        id: 26,
        name: 'dadest',
        email: 'www1@mail.com',
        posti: 21,
        postsCount: 21
    })
    allUser.push(newUserVip_2)
    return newUserVip_2
}

async function postNewUserVip_3() {
    const { data, newUserVip_3 } = await xz.post('http://jsonplaceholder.typicode.com/users', {
        id: 27,
        name: 'dad',
        email: 'www2@mail.com',
        posti: 24,
        postsCount: 24
    })
    allUser.push(newUserVip_3)
    return newUserVip_3
}

function searchTopUser(allUser) {
    let vipUser = []
    allUser.post.values(allUser).sort().forEach(function (value) {
        vipUser[value] = allUser[value];
         allUser.forEach(user => { user.post > })
    }return allUser.slice(0, 2)
}