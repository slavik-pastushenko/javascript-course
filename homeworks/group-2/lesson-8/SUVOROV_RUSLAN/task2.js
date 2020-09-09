const timeOut = () => {
    const now = new Date(),
        startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    console.log(Math.floor((now - startDay)/1000))
}
timeOut()