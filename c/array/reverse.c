#include<stdio.h>
/*
Reverse an array.
*/
void reverse(int arr[], int size) {
    int temp;
    for(int i=0; i<size-i; i++) {
            temp = arr[i];
            arr[i] = arr[size-1-i];
            arr[size-1-i] = temp;
    }
}
void display(int arr[], int size) {
    for(int i=0; i<size; i++) {
        printf("%d\t", arr[i]);
    }
}
int main(void) {
    int arr[] = {10, 20, 30, 40, 50};
    reverse(arr, 5);
    display(arr, 5);
    return 0;
}