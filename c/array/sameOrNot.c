#include<stdio.h>
/*
To check if two arrays are equal or not.
*/
int check(int arr1[], int arr2[], int *arr1Size, int *arr2Size) {
    if(*arr1Size == *arr2Size) {
        for(int i=0; i<*arr1Size; i++) {
            if(arr1[i] != arr2[i]) {
                return 1;
            }
        }
        return 0;
    }else {
        return 1;
    }
}
int main(void) {
    int arr1[] = {1, 2, 3, 4, 5};
    int arr2[] = {1, 2, 3, 4};
    int arr1Size = 4, arr2Size = 5;
    if(check(arr1, arr2, &arr1Size, &arr2Size) == 0) {
        printf("Equal...\n");
    }else {
        printf("Not Equal...\n");
    }
    return 0;
}