let btns_left = document.querySelectorAll(".leftbtn")
let btns_right = document.querySelectorAll(".rightbtn")


let leftSide = document.querySelector(".left")
let leftRight = document.querySelector(".right")

let left_AZN = document.querySelector('#left_azn')
left_AZN.classList.add('active_left')

let right_USD = document.querySelector('#right_usd')
right_USD.classList.add('active_right')


let firstval = left_AZN.innerText;
let secondval = right_USD.innerText;

let leftinput = document.querySelector('.leftinput')
let rightinput = document.querySelector('.rightinput')




let link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`;
let link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=${firstval}`;


btns_left.forEach(btn => {

   btn.addEventListener("click",(e) => {
       btns_left.forEach(item=>{
         item.classList.remove('active_left')
     })

       btn.classList.add('active_left')
       firstval=e.target.innerText

       link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`
       link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=${firstval}`;

       
   })
})

btns_right.forEach(btn => {

   btn.addEventListener("click",(e) => {
       btns_right.forEach(item=>{
         item.classList.remove('active_right')
     })

       btn.classList.add('active_right')
       secondval=e.target.innerText

       link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=${secondval}`
      link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=${firstval}`;

      
   })
})





function left(){


   leftinput.addEventListener("keyup",()=>{
   fetch(link)
   .then(response=>response.json())
   .then(data => {
           rightinput.value = data.rates[secondval]*leftinput.value
           
   })
   })

   leftinput.addEventListener("click",()=>{
       fetch(link)
       .then(response=>response.json())
       .then(data => {
               rightinput.value = data.rates[secondval]*leftinput.value
       })
       })

    
}
   

function right(){
   
   rightinput.addEventListener("keyup",()=>{
   fetch(link2)
   .then(response=>response.json())
   .then(data => {
           leftinput.value = data.rates[firstval]*rightinput.value
   })
   })

   rightinput.addEventListener("click",()=>{
       fetch(link2)
       .then(response=>response.json())
       .then(data => {
               leftinput.value = data.rates[firstval]*rightinput.value
       })
       })

      }
       

   
leftinput.addEventListener('click',left)
rightinput.addEventListener('click',right)

leftinput.addEventListener('keyup',left)
rightinput.addEventListener('keyup',right)

btns_left.addEventListener('click',left)
btns_right.addEventListener('click',right)

