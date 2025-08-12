### ❌ Disadvantage / Problem:
The .forEach() method does not return anything useful. It always returns undefined.

```
const coding=["js","Ruby","c","c++","python"]

const codeing_1=coding.forEach((item)=>{
  // console.log(item);
  return item;
})

console.log(codeing_1);
```

#### ✅ Alternative if you want a returned array:
If your goal is to create a new array based on transformation, use .map() instead:




