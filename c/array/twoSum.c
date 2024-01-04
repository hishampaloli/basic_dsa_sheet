#include<stdio.h>
/*
Given an array of integers 'nums' and an 'integer'
target, return indices of the two numbers such that 
they add up to 'target'.
 */
int twoSum(int arr[], int *size, int *target, int *returnSize) {
    returnSize[0] = -1;
    returnSize[1] = -1;
    for(int i=0; i<*size; i++) {
        for(int j=i+1; j<*size; j++) {
            if((arr[j] + arr[i])== *target) {
                returnSize[0] = i;
                returnSize[1] = j;
                return *returnSize;
            }
        }
    }
    return *returnSize;
}
int main(void) {
    int arr[] ={ 2, 7, 11, 15}, n = 4, result[2];;
    int target = 9; // The target element.
    twoSum(arr, &n, &target, result);
    printf("[%d, %d]\n", result[0], result[1]);
    return 0;
}