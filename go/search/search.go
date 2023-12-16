package main

import "fmt"

func linearSearch(arr []int, val int) bool {
	for i := 0; i < len(arr); i++ {
		if arr[i] == val {
			return true
		}
	}
	return false
}

func binarySearch(arr []int, val int) int {
	start, end := 0, len(arr)-1
	for start <= end {
		middle := (start + end) / 2
		if arr[middle] == val {
			return middle
		} else if arr[middle] < val {
			start = middle + 1
		} else {
			end = middle - 1
		}
	}
	return -1
}

func main() {
	arr := []int{1, 2, 4, 5, 8, 10, 12, 15}
	valToSearch := 8

	if linearSearch(arr, valToSearch) {
		fmt.Printf("%d found using Linear Search\n", valToSearch)
	} else {
		fmt.Printf("%d not found using Linear Search\n", valToSearch)
	}

	index := binarySearch(arr, valToSearch)
	if index != -1 {
		fmt.Printf("%d found at index %d using Binary Search\n", valToSearch, index)
	} else {
		fmt.Printf("%d not found using Binary Search\n", valToSearch)
	}
}