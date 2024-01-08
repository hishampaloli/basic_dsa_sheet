#include<stdio.h>
#include<stdlib.h>
/*
Doubly Linked List to count total number of nodes.
*/
//User defined data type.
struct node {
    int data;
    struct node *next;
    struct node *prev;
};
//Function to create new node(Linked List) structure.
struct node *createNode(int item) {
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->data = item;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}
//Function to connect node(Linked List) structure (insert last).
void addLast(struct node **head, int item) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        *head = newNode;
    }else {
        struct node *temp = *head;
        while(temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }
}
//Function to connect node(Linked List) structure (before a given value).
int countNodes(struct node **head) {
    if(*head == NULL) {
        return 0;
    }else {
        struct node *temp = *head;
        int count;
        while(temp != NULL) {
            count++;
            temp = temp->next;
        }
        return count;
    }
}
//Function to print the available nodes.
void display(struct node **head) {
    if(*head == NULL) {
        printf("Empty List...\n");
    }else {
        struct node *temp = *head;
        while(temp != NULL) {
            printf("Data %d\tPrev %p\t Next %p\n", temp->data, temp->prev, temp->next);
            temp = temp->next;
        }
    }
}
//Function to create sample nodes.
void sampleNode(struct node **head) {
    addLast(head, 10);
    addLast(head, 20);
    addLast(head, 30);
}
// Main function.
int main(void) {
    struct node *head = NULL;
    sampleNode(&head);  // To create sample nodes.
    printf("Total no of node : %d\n", countNodes(&head));
    // display(&head);
    return 0;
}
/*
-----output-----
Total no of node : 3
*/