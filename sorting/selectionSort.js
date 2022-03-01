
function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){
        var lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }

        var position = arr[i];
         arr[i] = arr[lowest];
         arr[lowest] = position;
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]));