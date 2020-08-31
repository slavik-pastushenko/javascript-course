const cityes ={
    minsk: 'belarus',
    berlin:'germany',
    kiev: 'ukraine'
};
for (const city in cityes ){
    console.log(`${city} - это ${cityes[city]}.`)
}