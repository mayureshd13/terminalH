
function disline (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.querySelector("#line1").innerHTML="Initializing Hacking"
            resolve("done")
        },2500)
        setTimeout(()=>{
            document.querySelector("#line2").innerHTML="Reading your files"
            resolve("done")
        },6000)
        setTimeout(()=>{
            document.querySelector("#line3").innerHTML="Password files detected"
            resolve("done")
        },10000)
        setTimeout(()=>{
            document.querySelector("#line4").innerHTML="Sending All personal files to server"
            resolve("done")
        },13000)
        setTimeout(()=>{
            document.querySelector("#line5").innerHTML="Cleaning up"
            resolve("done")
        },18000)
    })
}

async function play(){
    await disline();
}

play();