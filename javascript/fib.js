function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
