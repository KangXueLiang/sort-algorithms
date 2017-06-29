# quick sort 快速排序
### 快速排序思想：首先从需要排序的数组中的选择一个基数（也有叫枢纽的），一般从选择数组中间的那个，当然，选第一个也可以。然后把小于等于基数的放到一个left数组内，大于基数的放到right数组内，然后进行递归，再把left数组与right数组排序，从而达到整个数组数据有序。基于这个思想，写出如下代码：
```js
  function quicksort(arr){
    if(arr.length <= 1){ //判断数组长度，如果小于等于1，直接返回数组
      return arr
    }
    var left = []//新建一个放基数左边数据的数组
    var right = []//放大于基数的数据
    var pivot = arr.splice((arr.length / 2 | 0), 1)[0]//从原数组中取出基数
    for(let i of arr){
      if(i >= pivot){
        right.push(i)
      } else {
        left.push(i)
      }
    }
    return quicksort(left).concat([pivot],quicksort(right))//递归，返回
  }
```
### 当然，上述代码有个不好的地方就是每次递归都会新建两个数组，浪费了大量的空间，还不够优化。以下为原地快排：
```js
function paritition(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivot = paritition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}
```
