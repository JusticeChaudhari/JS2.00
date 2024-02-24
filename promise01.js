const promiseOne = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Promise Created");
        resolve();
    },1000);
    
})
promiseOne.then(function(){
    console.log("Promise Consumed");
})