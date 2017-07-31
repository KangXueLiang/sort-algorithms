```js
function bubbleSort(array){
  var len = array.length
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - 1; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}
```
