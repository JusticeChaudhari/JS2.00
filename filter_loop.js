const a = [1,2,3,4,5,6,7,8,9];

// a.filter((item)=>{
//     console.log(item);
//     return 2;
// }) ;

let count = a.filter((i)=>{i>5});
console.log(count);
// line number 9 will return [] empty array since explicity we need to return values in parenthesis functions
let update = a.filter((i)=>{return i>5});
console.log(update);