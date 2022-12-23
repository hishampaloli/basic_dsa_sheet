// factorial using common way...
function factorialNormal(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}




// factorial using using recurtion...
function factorialRecursion(num){
if(num === 1) return 1;
return num * factorialRecursion(num - 1);
}





// fauction which do Math.pow()...
function power(base, exponet){
    if(exponet === 1) return base;
    return base * power(base, exponet - 1);
} 





// function to do product of array...
function productOfArray(arr){
    if(arr.length === 0) return 1;
    return arr[0] *= productOfArray(arr.splice(1));
}





// function to add recurive inp...
function recuriveRange(num){
    if(num === 0) return 0
    return num + recuriveRange(num - 1);
};





//function to find fibonacci value of a input...
function fib(num) {
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2)
}





//function to revers the value of a string...
function  reverse(string) {
    if(string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0];
}




//function to check palindore of a string...
function isPalindrome(str){
    if(str.length === 1)return true;
    if(str.length === 2)return str[0] === str[1];
    if(str[0] === str.slice(-1))return isPalindrome(str.slice(1,-1));
    return false;
}

//function to check someREcursive...

function someRecursive(arr, val){
    if(arr.length === 0)return false;
    if(val(arr[0])) return true;
    someRecursive(arr.slice(1),val);
}

