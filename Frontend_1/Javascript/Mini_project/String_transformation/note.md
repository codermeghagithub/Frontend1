### 🌍 What Does g (Global) Do?
Without g - Replaces ONLY the first match:
javascriptconst text = "hello world example";
const result = text.replace(/\s+/, '');

console.log(result);  // "helloworld example"
//                         ↑ Only first space removed!
### With g - Replaces ALL matches:
javascriptconst text = "hello world example";
const result = text.replace(/\s+/g, '');

console.log(result);  // "helloworldexample"
//                         ↑ ALL spaces removed!