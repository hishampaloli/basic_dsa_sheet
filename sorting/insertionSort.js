function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentval = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentval;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentval;
    }
    return arr;
}

console.log(insertionSort([34,1,67,3,5,7]));