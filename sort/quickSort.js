// 快速排序
function quickSort(arr) {
    function sort(left, right) {
        let i = left;
        let j = right;
        let t = 0;
        let temp = arr[left];
        if (left > right) return;
        console.log(left, right, arr);
        while (i!=j) {
            while (arr[j] >= temp && j > i) { // 右侧找到小于基准数的时候停下来
                j--;
            }
            while (arr[i] <= temp && j > i) { // 左侧找到大于基准数的时候停下来
                i++;
            }
            if (i < j) { // 将找到的俩数调换位置
                t = arr[j];
                arr[j] = arr[i];
                arr[i] = t;
            }
        }
        // 当两个哨兵相遇时，将
        arr[left] = arr[i];
        arr[i] = temp;
        sort(left, i - 1);
        sort(i + 1, right);
        return arr;
    }
    return sort(0, arr.length-1);
}

quickSort([2, 7, 3, 9, 10, 6]);
// 1、递归
// 2、找一个基准、两个哨兵，探测一轮将定位一个数使数的左侧全小于基准，右侧全大于基准。
// 3、再继续探测左侧 和 右侧。继续第二步探测
// 4、直到所有探测完毕