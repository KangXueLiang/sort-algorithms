# 插入排序

插入排序（英语：Insertion Sort）是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
* 从第一个元素开始，该元素可以认为已经被排序
* 取出下一个元素，在已经排序的元素序列中从后向前扫描
* 如果该元素（已排序）大于新元素，将该元素移到下一位置
* 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
* 将新元素插入到该位置后
* 重复步骤2~5
如果比较操作的代价比交换操作大的话，可以采用二分查找法来减少比较操作的数目。该算法可以认为是插入排序的一个变种，称为二分查找插入排序。

// 以上内容来自维基百科
## 动图演示
![动图演示](https://segmentfault.com/img/remote/1460000011521014?w=394&h=520)


## 代码实现

```js
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var element = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            var tmp = arr[j];
            var order = tmp - element;
            if (order > 0) {
                arr[j + 1] = tmp;
            } else {
                break;
            }
        }
        arr[j + 1] = element;
    }
    return arr;
}
```
