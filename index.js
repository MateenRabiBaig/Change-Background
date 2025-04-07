let colors=['white','green','yellow','orange','pink','purple','violet','red']
let len=colors.length-1
let buttonControl=document.getElementById('btn')
let spanControl=document.querySelector('.color')

buttonControl.addEventListener('click',()=>{
    let index=generateRandomIndexValue()
    document.body.style.backgroundColor=colors[index]
    spanControl.innerHTML=colors[index]
})

function generateRandomIndexValue(){
    return Math.round(Math.random()*len)
}