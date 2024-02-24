function addition (a, b){
    if(typeof(a)== 'number' && typeof(b)== 'number'){
        return a+b;
    }
    else{
        return -1;
    }
}
const result = addition(80,20)
console.log(addition(10,null)==-1? "Invlaid" : "Valid");
console.log(addition(10,20))
console.log(result)
