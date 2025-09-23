const  body=document.getElementsByTagName("body")[0];
const toggleBtn=document.getElementsByTagName("button")[0];
let isDarkMode=false;
  // console.log(isDarkMode);

toggleBtn.addEventListener("click",()=>{
  console.log(isDarkMode);


  if(isDarkMode){
    body.classList.add("light");
    isDarkMode=false;
    body.classList.remove("dark")
  }
  else{
      body.classList.add("dark");
      isDarkMode=true;
      body.classList.remove("light")
  }

})