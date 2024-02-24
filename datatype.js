// // // let s= "32"
// // // console.log(typeof s);
// // // let n = Number(s);
// // // console.log(typeof n);
// // // let z = String(n);
// // // console.log(z);
// // // console.log(typeof z);
// // // let c = 0

// // let date = new Date();
// // console.log(date);
// // console.log(parseInt('3'))
// // console.log(3=='3')
// // console.log('3'===3)

// // const id = Symbol("!@#")
// // const another_ID = "!@#"
// // console.log(id==another_ID)
// // console.log (id===another_ID)

// let data={
//     name : "Sarthak",
//     branch : "ENTC",
//     Subject : "JS",
// }
// console.log(data.name)
// console.log(data.branch)
// console.log(data.Subject)


let Name =new String('Sarthak')
let age = 20
console.log(`My name is ${Name} and i'm ${age} years old`)
console.log(Name)

/* 
    STRING FUNCTIONS :
    String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}anchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""
*/
console.log(Name.substring(1,4))
console.log(Name.slice(1,4));
// console.log(Name.slice(-7,2));