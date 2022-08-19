let count = document.querySelector("h2")
let counternumber = 0

function counter(){
    counternumber++
    count.innerHTML = counternumber
    if(counternumber == 10){
        clearInterval(stop)
    }
}

let stop = setInterval(function(){
    counter()
},500)




let type = document.querySelector(".type")
let typenumber = 0

let typeText = type.innerHTML.split(" ")

function typeJs() {
    if(typenumber === type.dataset.text.length){
        typeText.pop()
        type.innerHTML = typeText.join("")
        if(typeText.length === 0) {
            type.innerHTML += type.dataset.text.charAt(typenumber)
            typenumber = 0
        }
    }
    else{
        type.innerHTML += type.dataset.text.charAt(typenumber)
        typeText = type.innerHTML.split("")
        typenumber++

       }
}

let timingType = setInterval(()=>{
    typeJs()
},1000)

