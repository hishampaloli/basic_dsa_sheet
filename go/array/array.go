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

func main() {
	
	
}	
