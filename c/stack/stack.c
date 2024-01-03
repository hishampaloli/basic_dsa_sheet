#include<stdio.h>
// Function for push operation.
int push(int arr[], int *top, int *maxSize) { 
    if(*top >= *maxSize-1) {
        printf("Stack Over Flow...\n");
    }else {
        *top = *top + 1;
        printf("Enter the value : ");
        scanf("%d", &arr[*top]);
    }
    return *top;
}
// Function for pop operation.
int pop(int arr[], int *top) { 
    if(*top == -1) {
        printf("Stack Under Flow...\n");
    }else {
        arr[*top] = 0;
        *top = *top - 1;
    }
    return *top;
}
void display(int arr[], int *top) {
    for(int i=0; i<*top; i++) {
        printf("%d\t", arr[i]);
    }
    printf("\n");
}
int main(void) {
    int arr[10], top = -1, maxSize = 1;
    push(arr, &top, &maxSize);
    push(arr, &top, &maxSize);
    pop(arr, &top);
    pop(arr, &top);
    return 0;
}
/*
-----output----
Enter the value : 1
Stack Over Flow...
Stack Under Flow...

*/