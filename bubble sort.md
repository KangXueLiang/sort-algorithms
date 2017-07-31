
# 冒泡排序
冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

作为最简单的排序算法之一，冒泡排序给我的感觉就像 Abandon 在单词书里出现的感觉一样，每次都在第一页第一位，所以最熟悉。冒泡排序还有一种优化算法，就是立一个 flag，当在一趟序列遍历中元素没有发生交换，则证明该序列已经有序。但这种改进对于提升性能来说并没有什么太大作用

## 动图演示
![动图演示](https://github.com/KangXueLiang/JS-Sorting-Algorithm/raw/master/res/bubbleSort.gif)


## 代码实现
现在根据定义，来写下初步的代码
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
很明显，运行的效率很低，O(N2)，可以优化一下
优化后的代码
```js
function bubbleSort2(array){
  var len = array.length
  for(var i = 0; i < len - 1; i++){
    var swapped = false
    for(var j = 0; j < len - i - 1; j++){
      if(array[j] > array[j + 1]){
        swapped = true
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
    if(swapped == false){
      break
    }
  }
  return array
}
```
