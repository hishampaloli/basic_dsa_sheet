// TODO: check if two arrays are equal in terms of elements

// class Solution {
//   //Function to check if two arrays are equal or not.
//   check(A, B, N) {
//     let HashTableA = {};
//     let HashTableB = {};

//     for (let i = 0; i < N; i++) {
//       if (HashTableA[A[i]]) HashTableA[A[i]]++;
//       if (HashTableB[B[i]]) HashTableB[B[i]]++;

//       if (!HashTableA[A[i]]) HashTableA[A[i]] = 1;
//       if (!HashTableB[B[i]]) HashTableB[B[i]] = 1;
//     }

//     for (let i = 0; i < N; i++) {
//       if (!HashTableB[A[i]]) return false;
//       if (HashTableB[A[i]] !== HashTableA[A[i]]) return false;
//     }

//     return true;
//   }
// }

// TODO: reverse array in place;

// class Solution {
//   //Function to reverse array;

// function reverseArray(arr) {
//   for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// return arr
// }
// }

// TODO: find the sum off all elements in an array;

// class Solution {
//   //Function to find sum of all elements;

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// }

// TODO: find the frequency of the elements in the array;
// function frequency(arr) {
//   let hashTable = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (hashTable[arr[i]]) hashTable[arr[i]]++;
//     if (!hashTable[arr[i]]) hashTable[arr[i]] = 1;
//   }
//   return hashTable;
// }

// TODO: find the first non repeating element in the array;

// function firstNonRepeating(arr) {
//   let hashTable = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (hashTable[arr[i]]) hashTable[arr[i]]++;
//     if (!hashTable[arr[i]]) hashTable[arr[i]] = 1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (hashTable[arr[i]] == 1) return arr[i];
//   }

//   return false;
// }

// TODO: find the element with highest frequency;
// function highestFreqElement(arr) {
//   let hashTable = {};

//   let largestCount = 0;
//   let mostOccuringElement;
//   for (let i = 0; i < arr.length; i++) {
//     if (hashTable[arr[i]]) hashTable[arr[i]]++;
//     if (!hashTable[arr[i]]) hashTable[arr[i]] = 1;

//     if (hashTable[arr[i]] > largestCount) {
//       largestCount = hashTable[arr[i]];
//       mostOccuringElement = arr[i];
//     }
//   }

//   return mostOccuringElement;
// }

// TODO: maximum difference between two element in an array
// function maxDifference(arr) {
//   let highest = -111111;
//   let lowest = 11111111;

//   for (let i = 0; i < arr.length; i++) {
//     if (highest <= arr[i]) highest = arr[i];
//     if (lowest >= arr[i]) lowest = arr[i];
//   }
//   return lowest - highest;
// }

// TODO: find the kth largest element in an array;

// function kthLargestElement(arr, k) {
//   const uniq = new Set();
//   const kthArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     uniq.add(arr[i]);
//   }
//   uniq.forEach((el) => kthArray.push(el));
//   kthArray.sort();

//   return kthArray[k - 1];
// }

// TODO: missing number in consecutive integers

// class Solution {
//   MissingNumber(array, n) {
//     let nSum = 0;
//     let arrSum = 0;

//     for (let i = 0; i < n; i++) {
//       nSum += i + 1;
//     }
//     for (let i = 0; i < array.length; i++) {
//       arrSum += array[i];
//     }

//     return nSum - arrSum;
//   }
// }

// TODO: find the element which greater than or equal to all the elements to its right side
// class Solution {
//   //Function to find the leaders in the array.

//   leaders(arr, n) {
//     let leader = [];
//     let max = -1111111;

//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (max <= arr[i]) {
//         max = arr[i];
//         leader.push(max);
//       }
//     }
//     leader.sort((a, b) => b - a);

//     return leader;
//   }
// }

// TODO: first repeating element in an array
// class Solution {
//   // Function to return the position of the first repeating element.
//   firstRepeated(arr, n) {
//     let hashTable = {};

//     for (let i = 0; i < arr.length; i++) {
//       if (hashTable[arr[i]]) hashTable[arr[i]]++;
//       if (!hashTable[arr[i]]) hashTable[arr[i]] = 1;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (hashTable[arr[i]] != 1) return i + 1;
//     }

//     return -1;
//   }
// }


// TODO: is correct params;

// function ispar(exp) {
//   let stack = [];

//   for (let i = 0; i < exp.length; i++) {
//     if (exp[i] === "(" || exp[i] === "{" || exp[i] === "[") {
//       stack.push(exp[i]);
//     } else if (exp[i] === ")" || exp[i] === "}" || exp[i] === "]") {
//       if (stack.length === 0) {
//         return false;
//       }

//       let lastBracket = stack.pop();

//       if (
//         (lastBracket === "(" && exp[i] !== ")") ||
//         (lastBracket === "{" && exp[i] !== "}") ||
//         (lastBracket === "[" && exp[i] !== "]")
//       ) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }


// TODO: first element that occurs at least K number of times.
 
// class Solution {
//   firstElementKTime(arr, k) {
//     let occTable = {};

//     for (let i = 0; i < arr.length; i++) {
//       if (occTable[arr[i]]) occTable[arr[i]]++;
//       if (!occTable[arr[i]]) occTable[arr[i]] = 1;
//       if (occTable[arr[i]] == k) return arr[i];
//     }
//     return -1;
//   }
// }
