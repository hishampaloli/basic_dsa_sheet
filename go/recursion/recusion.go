package main

import (
	"fmt"
	"math"
	"strings"
)

// factorial using common way
func factorialNormal(num int) int {
	total := 1
	for i := num; i > 1; i-- {
		total *= i
	}
	return total
}

// factorial using recursion
func factorialRecursion(num int) int {
	if num == 1 {
		return 1
	}
	return num * factorialRecursion(num-1)
}


func main() {
	fmt.Println(factorialNormal(5))
	fmt.Println(factorialRecursion(5))
	fmt.Println(power(2, 3))
	fmt.Println(productOfArray([]int{1, 2, 3, 4}))
	fmt.Println(recursiveRange(5))
	fmt.Println(fib(6))
	fmt.Println(reverse("hello"))
	fmt.Println(isPalindrome("level"))
	fmt.Println(someRecursive([]int{1, 2, 3, 4}, func(num int) bool {
		return num%2 == 0
	}))
}
