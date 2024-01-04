#include<stdio.h>
/*
The sum of n natural numbers.
*/
int sumOfN(int arr[], int *size) {
    int sum=0;
    for(int i=0; i<*size; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
int main(void) {
    int arr[] = {10, 20, 30, 40, 50};
    int size = 5;
    printf("Sum is %d\n", sumOfN(arr, &size));
    return 0;
}