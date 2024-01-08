/* Selection sort */

#include<stdio.h>
void selectionSort(int arr[], int size) {
        for(int i=0; i<size; i++) {
            int min = i;
            for(int j=i; j<size; j++) {
                if(arr[j] < arr[min]) 
                    min = j;
            }
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
}
int main(void) {
    int arr[] = {5, 3, 9, 1, 2, 8, 4, 1};
    int size = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, size);
    for(int i=0; i<size; i++) {
        printf("%d\t", arr[i]);
    }
    return 0;
}
/*
-----Output-----
1       1       2       3       4       5       8       9
*/