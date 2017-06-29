# quick sort 快速排序

快速排序是由东尼·霍尔所发展的一种排序算法。在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较，但这种状况并不常见。事实上，快速排序通常明显比其他 Ο(nlogn) 算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地被实现出来。

快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高！它是处理大数据最快的排序算法之一了。


## 1. 算法步骤

1. 从数列中挑出一个元素，称为 “基准”（pivot）;

2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；

3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

递归的最底部情形，是数列的大小是零或一，也就是永远都已经被排序好了。虽然一直递归下去，但是这个算法总会退出，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。


## 2. 动图演示

![动图演示](https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/res/quickSort.gif?raw=true)

## 3. 代码实现

### 首先是第一种
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
