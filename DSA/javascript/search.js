//linear search...

function LinearSearch(arr, val){
    for(i = 0; i < arr.length; i ++){
        if(arr[i] === val) return true;
        return false
    }
}




// binary search..

function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);

    while(arr[middle] !== val && start <= end){
        if(arr[middle] < val) start = middle + 1;
        else end = middle - 1;
        middle = Math.floor((start + end)/2);
    }
    return arr[middle] === val ? middle : -1;
}



console.log(binarySearch([1,,4,5], 12));
