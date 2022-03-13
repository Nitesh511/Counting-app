let countEL=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let totalEl=document.getElementById("total-el")




let count=0
let combine=0

function increment(){
    count=count+1
    countEL.innerText=count
    console.log(count)
}

function save(){
    combine=count+ "-"
    saveEl.innerText +=combine
    countEL.innerText=0
    count=0
    console.log(combine)

}

function total(){
    Total=combine+count
    totalEl.innerText+=Total
    combine.innerText=0
   
 
}

