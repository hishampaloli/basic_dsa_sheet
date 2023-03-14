const pivot = (arr, start, end = arr.length - 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
};

function sort(arr, left = 0, right = arr.length - 1) {
  
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    sort(arr, left, pivotIndex - 1);
    sort(arr, pivotIndex + 1, right);
  }
  
  return arr;
}

console.log(sort([1, 5, 6, 3, 76, 34, -3]));
