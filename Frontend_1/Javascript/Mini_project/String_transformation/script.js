const input = document.querySelector('#userInput');

const outputs = {
  lowercase: document.querySelector('#lc'),
  uppercase:document.querySelector('#uc'),
  Camel_c:document.querySelector('#cc'),
  PC:document.querySelector('#pc'),
  SC:document.querySelector('#sc'),
  KC:document.querySelector('#kc'),
  TS:document.querySelector('#ts'),


}
function toLowerCase(str){
  return str.toLowerCase();
}

function toUpperCase(str){
  return str.toUpperCase();
}

function toCamelCase(str){
  return str.toLowerCase().trim().split(/\s+/).map((word,index)=>{
    if(index===0){
      return word;
    }
    return word.charAt(0).toUpperCase()+word.slice(1);
  })
  .join('');
}
function toPascaleCase(str){
  return str.toLowerCase().trim().split(/\s+/).map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  })
  .join('');
}
// **5. SNAKE CASE: "hello world" -> "hello_world"
// Lowercase with underscores instead of spaces

function toSnakeCase(str){
  return  str.toLowerCase().trim().split(/\s+/).join('_');
}
// 6. KEBAB CASE: "hello world" -> "hello-world"
// Lowercase with hyphens instead of spaces
function toKabebCase(str){
return str.toLowerCase().trim().split(/\s+/).join('-')
}
// 7. TRIM SPACES: "hello world" -> "helloworld"
// Remove ALL spaces
// 🌍 What Does g (Global) Do? :Without g - Replaces ONLY the first match:
function toTrimSpaces(str){
  return str.replace(/\s+/g,'');
  

}

function updateTransformation(){
  const value=input.value;
  if (outputs.lowercase) outputs.lowercase.textContent = toLowerCase(value);
  if (outputs.uppercase) outputs.uppercase.textContent = toUpperCase(value);

  if(outputs.Camel_c)outputs.Camel_c.textContent=toCamelCase(value);
  if(outputs.PC)outputs.PC.textContent=toPascaleCase(value);
  if(outputs.SC)outputs.SC.textContent=toSnakeCase(value);
  if(outputs.KC)outputs.KC.textContent=toKabebCase(value);
  if(outputs.TS)outputs.TS.textContent=toTrimSpaces(value);


}

updateTransformation();
// Listen for input changes
input.addEventListener('input', updateTransformation);
