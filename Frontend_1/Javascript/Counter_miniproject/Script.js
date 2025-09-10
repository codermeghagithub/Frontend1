const count=document.querySelector('.count')
const minasbtn=document.querySelector('#minas')
const plasbtn=document.querySelector('#plus')
const changeby=document.querySelector('.changeval')
const previous=document.querySelector('#set')

minasbtn.addEventListener('click',()=>{
const coutvalue=parseInt(count.innerText);
// count.innerText=countminus-1;
const changevalue=parseInt(changeby.value)
count.innerText=coutvalue-changevalue;

})

plasbtn.addEventListener("click",()=>{
const coutvalue=parseInt(count.innerText)  
// count.innerText=countval+1;
const changevalue=parseInt(changeby.value)
count.innerText=coutvalue+changevalue;

})

previous.addEventListener('click',()=>{
  count.innerText=0;
})