
function reverseString(str) {
    return str.split("").reverse().join("")
} 
  


function reversedStrInSentence(sentence) {
  let srtArr = sentence.split(" ");
  let reversedStrInSentenceOutput = [];

  for (let i = 0; i < srtArr.length; i++) {
    reversedStrInSentenceOutput = [
      ...reversedStrInSentenceOutput,
      " ",
      srtArr[i].split("").reverse().join(""),
    ];
  }
  return reversedStrInSentenceOutput.join("")
}

function palindrome(str){
 return str.split("").reverse().join("") === str ? 'IsPal' : 'NotPal'
}

