const pm = new Promise(function(resolve,reject){
    setTimeout(function(){
        const err = false;
        if(!err){
            resolve({user: 'Sarthak ', current: 'DSA'})
        }
        else{
            reject({message: "Error Encountered"})
        }
    },1000)
}).then(function(usr){
    console.log(usr.user);
    return usr.current;
}).then(function(usr2){
    console.log(usr2)
}).catch(function(err){
    console.log("Msg : "+err.message)
}).finally(function(){
    console.log('process completed')
})