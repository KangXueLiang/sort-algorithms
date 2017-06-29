
# 堆排序

## 思路： 先把所给数组元素排成最大堆，然后把堆顶的元素与最后一个元素交换位置，把剩下的元素继续排成最大堆，递归。
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
