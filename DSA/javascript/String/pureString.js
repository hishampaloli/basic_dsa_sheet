// TODO: To reverse the words in a secntenxe

// Input:
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i

// class Solution {
//   //Function to reverse words in a given string.
//   reverseWords(s) {
//     let wordArray = [];

//     let word = "";
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== ".") {
//         word += s[i];
//       } else {
//         wordArray.push(word);
//         word = "";
//       }
//     }
//     wordArray.push(word);

//     let reverseString = "";

//     for (let i = wordArray.length - 1; i >= 0; i--) {
//       reverseString += wordArray[i];
//       if (i !== 0) reverseString += ".";
//     }

//     return reverseString;
//   }
// }

// TODO: palindrome

// class Solution {
//   isPalindrome(S) {
//     for (let i = 0, j = S.length - 1; i < S.length / 2; i++, j--) {
//       if (S[i] !== S[j]) return 0;
//     }
//     return 1;
//   }
// }
