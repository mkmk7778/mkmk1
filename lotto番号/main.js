const numbersdiv = document.querySelector(".numbers")
const drawbutton = document.querySelector("#draw")
const resetbutton = document.querySelector("#reset")

const lottonumbers = []
const colors = ["tomato","teal","orange","purple","blue"]

function paintnumber(number){
    const eachnumdiv=document.createElement("div")
    let colorindex=Math.floor (number/10)
    colors[colorindex]
    eachnumdiv.classList.add("eachnum")
    eachnumdiv.style.backgroundColor=colors[colorindex]
    eachnumdiv.textContent=number
    numbersdiv.appendChild(eachnumdiv)
}

drawbutton.addEventListener("click", function(){
    while(lottonumbers.length<6){
    let ran = Math.floor(Math.random()*43)+1
    if(lottonumbers.indexOf(ran)=== -1){
    lottonumbers.push(ran)
    paintnumber(ran)
    }
  }
})

resetbutton.addEventListener("click",function(){
    lottonumbers.splice(0,6)
    numbersdiv.innerHTML=""
})