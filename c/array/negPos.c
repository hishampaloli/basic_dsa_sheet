#include<stdio.h>
/*
To sort the negative elements in the left side of the array.
*/
int arrange(int arr[], int *size) {
    int temp;
    for(int i=0; i<*size; i++) {
        for(int j=i+1; j<*size; j++) {
            if(arr[i] > 0) {
                if(arr[j] < 0) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return *arr;
}
int main() {
    int arr[] = {1, -1, 2, -2, 3, -3}, size = 6;
    arrange(arr, &size);
    for(int i=0; i<size; i++) {
        printf("%d\t", arr[i]);
    }
    printf("\n");
    return 0;
}