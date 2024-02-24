//('https://api.sampleapis.com/beers/ale')
async function processing_API (){
    try{
        const result = await fetch('https://api.sampleapis.com/beers/ale');
        const process = await result.json();
        console.log(process);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Finally Processed");
    }
}
processing_API();