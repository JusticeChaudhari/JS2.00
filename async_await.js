const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        const error = true
        if(!error){
            resolve({user:"Sathak", mail:"123@example.com"});
            console.log("Created")
        }
        else{
            reject("Error : Something went Wrong");
        }
    },1000)
})
async function consumePromiseFour(){
    try{
        const response  = await promiseFour;
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
/* to execute :  */ consumePromiseFour();