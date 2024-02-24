const obj = {
    js : 'javascript',
    cpp : 'C plus plus',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in obj) {
    console.log(key," : ",obj[key]);
}



// const map = new Map();
// map.set("IND",'India')
// map.set("FR ","France")
// map.set("USA",'United States of America')

// for (const key in map) {
//     console.log(map);
// }
// forin loop is not itterable on map