
let userInput = document.getElementById("input")
let srchbtn = document.getElementById("srchbtn")

 srchbtn.addEventListener('click',function(){
   let character = userInput.value

   console.log(character)
   fetch(`http://localhost:3001/api/characters?character=${character}`)
   .then(res=>res.json())
   .then(data=>console.log(data))

 })
  
