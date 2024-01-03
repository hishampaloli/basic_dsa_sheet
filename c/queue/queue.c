#include<stdio.h>
// Function for insert operation(Enqueue).
int Enqueue(int arr[], int *front, int *rear, int *maxSize) {
    if(*front == -1) {
        *front = *rear = 0;
        printf("Enter the value : ");
        scanf("%d", &arr[*rear]);
    }else if(*rear < *maxSize-1) {
        *rear = *rear + 1;
        printf("Enter the value : ");
        scanf("%d", &arr[*rear]);
    }else {
        printf("Queue Over Flow...\n");
    }
    return *rear;
}
// Function for delete operation(Dequeue).
int Dequeue(int arr[], int *front, int *rear) {
    if(*front == -1) {
        printf("Queue Under Flow...\n");
    }
    else {
        arr[*front] = 0;
        *front = *front + 1;
    }
    return *front;
}
// Function for display elements.
void display(int arr[], int *front, int *rear) {
    if(*front == -1) {
        printf("Empty element...\n");
    }else {
        for(int i=*front; i<*rear+1; i++) {
            printf("%d\t", arr[i]);
        }
        printf("\n");
    }
}
int main(void) {
    int arr[10], front, rear, maxSize = 2;
    front = rear = -1;
    Enqueue(arr, &front, &rear, &maxSize);
    Enqueue(arr, &front, &rear, &maxSize);
    Enqueue(arr, &front, &rear, &maxSize);
    Dequeue(arr, &front, &rear);
    Dequeue(arr, &front, &rear);
    Dequeue(arr, &front, &rear);
    display(arr, &front, &rear);
    return 0;
}
/*
-----output-----
Enter the value : 1
Enter the value : 1
Queue Over Flow...

*/