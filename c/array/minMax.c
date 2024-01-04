#include<stdio.h>
/*
Find the minimum and maximum values in an unsorted array.
*/
int minMax(int arr[], int *size, int *result) {
    int min, max;
    max = min = arr[0];
    result[0] = -1;
    result[1] = -1;
    for(int i=1; i<*size; i++) {
        if(arr[i] <= min) {
            min = arr[i];
        }
        if(arr[i] >= max) {
            max = arr[i];
        }
    }
    result[0] = min;
    result[1] = max;
    return *result;
}
int main(void) {
    int arr[] = {1, 11, 111, 1111, 11111}, size = 5;
    int result[2];
    minMax(arr, &size, result);
    printf("[%d, %d]\n", result[0], result[1]);
    return 0;
}