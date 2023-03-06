
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
