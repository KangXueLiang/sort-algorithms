

冒泡排序（Bubble Sort，台湾译为：泡沫排序或气泡排序）是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
冒泡排序算法的流程如下：
* 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
* 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
* 针对所有的元素重复以上的步骤，除了最后一个。
* 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
由于它的简洁，冒泡排序通常被用来对于程序设计入门的学生介绍算法的概念。

![动图演示](http://bubkoo.qiniudn.com/Bubble_sort_animation.gif)

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
