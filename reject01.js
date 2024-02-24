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
promiseFour.then(function(user1){
    console.log(user1.user);
    return user1.mail
}).then(function(user2){
    console.log(user2);
}).catch(function(err){
    console.log(err);
}).finally(()=>{console.log('finally pati gyo')})

