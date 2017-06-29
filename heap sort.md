
# 堆排序

堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

1. 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
2. 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；

堆排序的平均时间复杂度为 Ο(nlogn)。


## 1. 算法步骤

1. 创建一个堆 H[0……n-1]；

2. 把堆首（最大值）和堆尾互换；

3. 把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；

4. 重复步骤 2，直到堆的尺寸为 1。


## 2. 动图演示

![动图演示](res/heapSort.gif)
## 3. 代码实现。
```js
function hearSort(a){
  var len = a.length //获取数组长度
  heapify(a, len)//先排成最大堆
  for(var i = len - 1; i >= 0; i--){//循环，把堆顶元素与堆底元素交换，相当于堆底元素已在指定位置。每次减少一个长度，把剩下的继续排成最大堆，递归。
    [a[0], a[i]] = [a[i], a[0]]
    len--//此处记得长度减一，把已排好的元素踢出堆
    heapify(a, len)
  }
  return a
}

function max_heap(a, i, len){//最大堆函数
  var left = i * 2 + 1//节点的左枝
  var right = i * 2 + 2//节点的右枝
  var largest = i//默认节点的值为最大值
  if(left < len && a[left] > a[largest]){//比较节点值与左右值的值，把较大值放到节点位置，完成最大堆。并把左右枝排成最大堆。
    largest = left
  }
  if(right < len && a[right] > a[largest]){
    largest = right
  }
  if(largest !== i){
    [a[i], a[largest]] = [a[largest], a[i]]
    max_heap(a, largest, len)
  }

}
function heapify(a, len){//堆排序函数
  var lastParentNode = len / 2 | 0
  for(var i = lastParentNode; i >= 0; i--){
    max_heap(a, i, len)
  }
}
```
done!
