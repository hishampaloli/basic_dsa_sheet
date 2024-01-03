#include<stdio.h>
/*
Factorial of n numbers.
*/
int fact(int arr[], int *size) {
    int fact = 1;
    for(int i=0; i<*size; i++) {
        fact = fact * arr[i];
    }
    return fact;
}
int main(void) {
    int arr[] = {1, 2, 3, 4, 5};
    int size = 5;
    printf("Factorial is %d\n", fact(arr, &size));
    return 0;
}