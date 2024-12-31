
function disline (){
    return Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.querySelector("#line1").innerHTML="hi"
            resolve("done")
        },1000)
    })
}

async function play(){
    await disline();
}

play();