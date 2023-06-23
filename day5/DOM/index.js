document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'

const child = document.body.children;

const colors = ['red','blue','green','pink','crimson'] 
let i=0
// setInterval(()=>{child[0].textContent  = colors[i%5],child[0].style.color = colors[i%5],i++},100)
// setInterval(()=>{child[1].textContent = colors[i%5],child[1].style.color = colors[i%5],i++},150)
// setInterval(()=>{child[2].textContent = colors[i%5],child[2].style.color = colors[i%5],i++},200)

setInterval(()=>{child[0].style.color = colors[i%5],i++},100)
setInterval(()=>{child[1].style.color = colors[i%5],i++},150)
setInterval(()=>{child[2].style.color = colors[i%5],i++},200)
