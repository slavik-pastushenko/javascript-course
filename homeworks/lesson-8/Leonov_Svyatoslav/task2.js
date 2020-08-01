function SecondsFromTheStart(){
    let now = new Date;
    console.log((now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds());
}
SecondsFromTheStart();