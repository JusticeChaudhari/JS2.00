const arr = [1,2,3,4,5];
for (const i of arr) {
    console.log(i);    
}
const obj = {
    obj1:{name: 'abs'}, 
    obj2:{name : 'abc'}, 
    obj3:{name:'wwe'}
};
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
        
    }
}