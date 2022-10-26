const btn =document.querySelector('#generate-btn')
const number = document .querySelector('#number')
btn.addEventListener(
    'click',()=>{
        let random = Math.floor(Math.random() * 10) ;
number.textContent=random
    }
)