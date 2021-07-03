function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 1; j < n - i; j++){
            if (arr[j-1] > arr[j]) {
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            console.log(i, arr);
        }
    }
    return arr;
}
bubbleSort([5, 3, 2, 1]);
// 外层循环n-1次 循环一次排好一个数，排好n-1个数最后一个数也就排好了(n-2+1 = n-1次)
// 内层循环每次循环n-i-1（外层循环）次，每次排好一次，内层循环就可以少比较一次