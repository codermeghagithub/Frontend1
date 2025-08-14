const  body=document.getElementsByTagName("body")[0];
const toggleBtn=document.getElementsByTagName("button")[0];
const isDarkMode=false;
  // console.log(isDarkMode);

toggleBtn.addEventListener("click",()=>{
  if(isDarkMode){
    body.classList.remove("dark");
    isDarkMode=false;
  }
  else{
      body.classList.add("dark");
      isDarkMode=true;
  }

})