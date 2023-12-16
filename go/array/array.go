package main

import "fmt"


func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// max returns the maximum of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// TODO: Check if two arrays are equal in terms of elements
func areArraysEqual(arr1, arr2 []int, N int) bool {
	hashTableA := make(map[int]int)
	hashTableB := make(map[int]int)

	for i := 0; i < N; i++ {
		if _, ok := hashTableA[arr1[i]]; ok {
			hashTableA[arr1[i]]++
		}
		if _, ok := hashTableB[arr2[i]]; ok {
			hashTableB[arr2[i]]++
		}

		if _, ok := hashTableA[arr1[i]]; !ok {
			hashTableA[arr1[i]] = 1
		}
		if _, ok := hashTableB[arr2[i]]; !ok {
			hashTableB[arr2[i]] = 1
		}
	}

	for i := 0; i < N; i++ {
		if _, ok := hashTableB[arr1[i]]; !ok {
			return false
		}
		if hashTableB[arr1[i]] != hashTableA[arr1[i]] {
			return false
		}
	}

	return true
}

// TODO: Reverse array in place
func reverseArray(arr []int) []int {
	for i, j := 0, len(arr)-1; i < len(arr)/2; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
	return arr
}

// TODO: Find the sum of all elements in an array
func sum(arr []int) int {
	sum := 0
	for i := 0; i < len(arr); i++ {
		sum += arr[i]
	}
	return sum
}

// TODO: Find the frequency of the elements in the array
func frequency(arr []int) map[int]int {
	hashTable := make(map[int]int)

	for i := 0; i < len(arr); i++ {
		if _, ok := hashTable[arr[i]]; ok {
			hashTable[arr[i]]++
		}
		if _, ok := hashTable[arr[i]]; !ok {
			hashTable[arr[i]] = 1
		}
	}
	return hashTable
}

// TODO: Find the first non-repeating element in the array
func firstNonRepeating(arr []int) int {
	hashTable := make(map[int]int)

	for i := 0; i < len(arr); i++ {
		if _, ok := hashTable[arr[i]]; ok {
			hashTable[arr[i]]++
		}
		if _, ok := hashTable[arr[i]]; !ok {
			hashTable[arr[i]] = 1
		}
	}

	for i := 0; i < len(arr); i++ {
		if hashTable[arr[i]] == 1 {
			return arr[i]
		}
	}

	return -1
}

// TODO: Find the element with the highest frequency
func highestFreqElement(arr []int) int {
	hashTable := make(map[int]int)

	largestCount := 0
	var mostOccurringElement int
	for i := 0; i < len(arr); i++ {
		if _, ok := hashTable[arr[i]]; ok {
			hashTable[arr[i]]++
		}
		if _, ok := hashTable[arr[i]]; !ok {
			hashTable[arr[i]] = 1
		}

		if hashTable[arr[i]] > largestCount {
			largestCount = hashTable[arr[i]]
			mostOccurringElement = arr[i]
		}
	}

	return mostOccurringElement
}

// TODO: Maximum difference between two elements in an array
func maxDifference(arr []int) int {
	highest := -111111
	lowest := 11111111

	for i := 0; i < len(arr); i++ {
		if highest <= arr[i] {
			highest = arr[i]
		}
		if lowest >= arr[i] {
			lowest = arr[i]
		}
	}
	return lowest - highest
}

// TODO: Find the kth largest element in an array
func kthLargestElement(arr []int, k int) int {
	uniq := make(map[int]bool)
	var kthArray []int
	for i := 0; i < len(arr); i++ {
		uniq[arr[i]] = true
	}
	for el := range uniq {
		kthArray = append(kthArray, el)
	}
	return kthArray[k-1]
}

// TODO: Missing number in consecutive integers
func missingNumber(array []int, n int) int {
	nSum := 0
	arrSum := 0

	for i := 0; i < n; i++ {
		nSum += i + 1
	}
	for i := 0; i < len(array); i++ {
		arrSum += array[i]
	}

	return nSum - arrSum
}

// TODO: Find the element which is greater than or equal to all the elements to its right side
func leaders(arr []int) []int {
	var leader []int
	max := -1111111

	for i := len(arr) - 1; i >= 0; i-- {
		if max <= arr[i] {
			max = arr[i]
			leader = append(leader, max)
		}
	}

	for i, j := 0, len(leader)-1; i < j; i, j = i+1, j-1 {
		leader[i], leader[j] = leader[j], leader[i]
	}

	return leader
}

// TODO: First repeating element in an array
func firstRepeated(arr []int) int {
	hashTable := make(map[int]int)

	for i := 0; i < len(arr); i++ {
		if _, ok := hashTable[arr[i]]; ok {
			hashTable[arr[i]]++
		}
		if _, ok := hashTable[arr[i]]; !ok {
			hashTable[arr[i]] = 1
		}
	}

	for i := 0; i < len(arr); i++ {
		if hashTable[arr[i]] != 1 {
			return i + 1
		}
	}

	return -1
}

// TODO: Is correct parentheses
func isPar(exp string) bool {
	stack := []rune{}

	for i := 0; i < len(exp); i++ {
		if exp[i] == '(' || exp[i] == '{' || exp[i] == '[' {
			stack = append(stack, rune(exp[i]))
		} else if exp[i] == ')' || exp[i] == '}' || exp[i] == ']' {
			if len(stack) == 0 {
				return false
			}

			lastBracket := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			if (lastBracket == '(' && exp[i] != ')') ||
				(lastBracket == '{' && exp[i] != '}') ||
				(lastBracket == '[' && exp[i] != ']') {
				return false
			}
		}
	}

	return len(stack) == 0
}

// TODO: First element that occurs at least K number of times
func firstElementKTime(arr []int, k int) int {
	occTable := make(map[int]int)

	for i := 0; i < len(arr); i++ {
		if _, ok := occTable[arr[i]]; ok {
			occTable[arr[i]]++
		}
		if _, ok := occTable[arr[i]]; !ok {
			occTable[arr[i]] = 1
		}
		if occTable[arr[i]] == k {
			return arr[i]
		}
	}
	return -1
}

// TODO: Sorting array of 0s, 1s, and 2s
func sort012(arr []int) []int {
	count := [3]int{0, 0, 0}
	for i := 0; i < len(arr); i++ {
		count[arr[i]]++
	}

	j := 0
	for i := 0; i < 3; i++ {
		for count[i] > 0 {
			arr[j] = i
			j++
			count[i]--
		}
	}
	return arr
}

// TODO: Maximum subarray
func subarraySum(arr []int, s int) []int {
	sum := 0
	leftIdx := 0
	rightIdx := 0

	for i := 0; i < len(arr); i++ {
		sum += arr[i]
		if sum == s {
			rightIdx = i
			break
		}
		if sum > s {
			sum = 0
			leftIdx++
			i = leftIdx - 1
			rightIdx = i
		} else {
			rightIdx++
		}
	}

	if (leftIdx == 0 && rightIdx == len(arr)) || sum != s {
		return []int{-1}
	}

	return []int{leftIdx + 1, rightIdx + 1}
}

// TODO: Find the equilibrium point
func equilibriumPoint(arr []int) int {
	totalSum := 0
	prefixSum := 0

	for i := 0; i < len(arr); i++ {
		totalSum += arr[i]
	}

	for i := 0; i < len(arr); i++ {
		if prefixSum == totalSum-arr[i]-prefixSum {
			return i + 1
		}
		prefixSum += arr[i]
	}
	return -1
}

// TODO: Reverse subarrays
func reverseInGroups(arr []int, k int) []int {
	for i := 0; i < len(arr); i += k {
		left := i
		right := min(i+k-1, len(arr)-1)

		for left < right {
			arr[left], arr[right] = arr[right], arr[left]
			left++
			right--
		}
	}

	return arr
}

func main() {
	
	
}	
