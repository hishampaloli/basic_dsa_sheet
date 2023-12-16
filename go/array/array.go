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

func main() {
	
	
}	
