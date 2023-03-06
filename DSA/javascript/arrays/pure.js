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
