const card= document.querySelectorAll('.card')

card.forEach((card) =>{
card.addEventListener('click',() =>{
    removeActiveClasses()
 card.classList.add('active')
})
})

function  removeActiveClasses(){
    card.forEach(panel=>{
        panel.classList.remove('active')

    })

}