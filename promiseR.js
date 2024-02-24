const pm1 = new Promise(function (resolve, reject){
    
    setTimeout(function(){
        const err = false;
        if(!err){
            console.log("Promise made");
            resolve({username : 'Sarthak', device:"mac"})
        }
        else{
            console.log("Not successful");
            reject("Error");
        }
    },1000)
})
pm1.then(function(user){
    console.log(user.username)
    return user.device;
}).then(function(user){
    console.log(user);
}).catch(function(arg){
    console.log("E : "+arg)
}).finally(function(){
    console.log("process complete");
})