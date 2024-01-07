/* Bubble sorting*/

#include <stdio.h>
#include <stdlib.h>
void bubbleSort(int arr[], int size) {
	for(int i=0; i<size-1; i++) {
		for(int j=i+1; j<size; j++) {
			if(arr[i] > arr[j]) {
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}
int main(void) {
    int arr[] = {6, 7, 2, 8, 9, 1, 3, 1};
    int size = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, size);
	for(int i=0;i<size;i++) {
		printf("%d\t",arr[i]);
	}
	return 0;
}
/*
-----Output-----
1       1       2       3       6       7       8       9
*/