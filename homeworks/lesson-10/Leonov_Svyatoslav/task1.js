const axios = require('axios');

const { data: allusers } = await axios.get("http://jsonplaceholder.typicode.com/users");
const { data: allposts } = await axios.get("http://jsonplaceholder.typicode.com/posts");
if(allusers.find(user => user.email === "shaa@melissa.com") === undefined){
    var { data: newuser } = await axios.post("http://jsonplaceholder.typicode.com/posts",{
        email: "shaa@melissa.com",
        id: 11,
        name: "shaa mellisssa"
    });
}

allusers.push(newuser);
allusers.filter(user =>{
    delete user.phone; // наверное есть и умнее способ оставить только (d, name, email)))))
    delete user.address;
    delete user.company;
    delete user.username;
    delete user.website;
    user.posts = []; // правильно ли создаю новый ключ(в ТОМ месте не получаеться создать и добавить пост в масиив)? То есть сейчас все посты в массиве, правильно ли это?
});

allposts.forEach(onePost =>{
    if(onePost.title.length > 50){
        onePost.title = onePost.title.slice(0, 50);
    }
    if(allusers.find(user => user.id === onePost.userId) !== 'underfind'){
        allusers.find(user => user.id === onePost.userId).posts.push(onePost); // в !ЭТОМ! месте
    } else {
        console.log(`No user with id ${onePost.id}`);
    }
});
allusers.forEach(oneUser =>{
oneUser.postsCount = oneUser.posts.length;
});
allusers.sort((a, b) => {
return b.postsCount - a.postsCount;
});
let priseCounter = 1;
for(x = 0; x < 3; x++){
    console.log(`На месте номер ${priseCounter} у нас расположился юзер c айди: ${allusers[x].id}, под именем: ${allusers[x].name}, его почта: ${allusers[x].email} с количеством постов - ${allusers[x].postsCount}!!!`);
    priseCounter++;
}
console.log(allusers);

