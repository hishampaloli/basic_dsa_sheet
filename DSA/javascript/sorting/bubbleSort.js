



function bbsort(arr){

    var noSwap;

    for(i = arr.length; i > 0; i--){
        noSwap = true;

        for(j = 0; j < i -1; j++){
            if(arr[j] > arr[j + 1]){
                
                let storage  = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = storage;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
};

console.log(bbsort([2364,34,145,2,432343,1]));