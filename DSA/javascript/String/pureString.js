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

// TODO: find the common prefix in array of string;

//Input:   arr = [geeksforgeeks, geeks, geek, geezer]
// Output: gee

// class Solution {
//   longestCommonPrefix(arr, n) {
//     let pr = "";

//     for (let i = 0; i < arr[0].length; i++) {
//       let check = false;
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[0][i] === arr[j][i]) {
//           check = true;
//         } else {
//           check = false;
//           break;
//         }
//       }
//       if (check) {
//         pr += arr[0][i];
//       } else {
//         break;
//       }
//     }

//     return pr ? pr : -1;
//   }
// }

// TODO: Find the first non repeating letter in string

// Input:  hello
// Output: h

// class Solution {
//   //Function to find the first non-repeating character in a string.
//   nonrepeatingCharacter(s) {
//     let letTable = {};

//     for (let i = 0; i < s.length; i++) {
//       if (letTable[s[i]]) letTable[s[i]] = "rep";
//       if (!letTable[s[i]]) letTable[s[i]] = "uni";
//     }

//     for (let i = 0; i < s.length; i++) {
//       if (letTable[s[i]] === "uni") return s[i];
//     }

//     return "$";
//   }
// }


// TODO: Par checker

// ispar(str);
// {
//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "[" || str[i] == "{" || str[i] == "(") {
//       stack.push(str[i]);
//     } else if (str[i] == "]" || str[i] == "}" || str[i] == ")") {
//       if (stack.length == 0) return false;

//       let lastPushed = stack.pop();

//       if (
//         (lastPushed == "(" && str[i] !== ")") ||
//         (lastPushed == "{" && str[i] !== "}") ||
//         (lastPushed == "[" && str[i] !== "]")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length == 0;
// }
