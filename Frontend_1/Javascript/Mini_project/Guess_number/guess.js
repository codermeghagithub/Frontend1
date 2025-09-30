const userInput=document.querySelector('.form-input');
const form=document.querySelector('form')
const result= document.querySelector('.result')
let computerRN=Math.round(Math.random()*100)

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log('submitted');
  const userInputvalue=parseInt(userInputvalue.value)
  if(userInputvalue<computerRN){
    console.log('Too low');
    
  }
  else if(userInputvalue>computerRN){
    console.log('Too high'); 
  }
  else{
    console.log('congratulation');
    
  }
  form.reset();
  
})