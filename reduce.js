const a = [1,2,3,4,5,6,7,8,9]
let init = 10
let ap = a.reduce(
    (accumulator, currentvalue) => accumulator+currentvalue, init
)
console.log(ap)