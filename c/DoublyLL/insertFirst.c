#include<stdio.h>
#include<stdlib.h>
/*
Doubly Linked List to insert and delete first.
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
//Function to connect node(Linked List) structure (insert first).
void addLast(struct node **head, int item) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        *head = newNode;
    }else {
        newNode->next = *head;
        (*head)->prev = newNode;
        *head = newNode;
    }
}
//Function to delete node(Linked List) structure (delete first).
void deleteNode(struct node **head) {
    if(*head == NULL) {
        printf("List not exist...\n");
    }else {
        *head = (*head)->next;
        (*head)->prev = NULL;
    }
}
//Function to print the available nodes.
void display(struct node *head) {
    if(head == NULL) {
        printf("Empty List...\n");
    }else {
        struct node *temp = head;
        while(temp != NULL) {
            printf("Data %d\tNext %p\t Prev %p\n", temp->data, temp->next, temp->prev);
            temp = temp->next;
        }
    }
}
// Main function.
int main(void) {
    struct node *head = NULL;
    addLast(&head, 10);      //create node (insert first)
    addLast(&head, 20);      //create node      
    addLast(&head, 30);      //create node 
    addLast(&head, 40);      //create node 
    addLast(&head, 50);      //create node 
    deleteNode(&head);       //delete node (delete first)
    deleteNode(&head);       //delete node 
    display(head);           //display node
    return 0;
}
/*
-----output-----
Data 30 Next 0x55831c3482c0      Prev (nil)
Data 20 Next 0x55831c3482a0      Prev 0x55831c3482e0
Data 10 Next (nil)       Prev 0x55831c3482c0
*/