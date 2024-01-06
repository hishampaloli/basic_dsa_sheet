#include<stdio.h>
#include<stdlib.h>
/*
Doubly Linked List to insert and delete last.
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
//Function to delete node(Linked List) structure (delete last).
void deleteNode(struct node **head) {
    if(*head == NULL) {
        printf("List not exist...\n");
    }else {
        struct node *temp = *head;
        struct node *prev;
        while(temp->next != NULL) {
            prev = temp;
            temp = temp->next;
        }
        prev->next = NULL;
        temp->prev = NULL;
    }
}
//Function to the available nodes.
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
    addLast(&head, 10);      //create node (insert last)
    addLast(&head, 20);      //create node      
    addLast(&head, 30);      //create node 
    addLast(&head, 40);      //create node 
    addLast(&head, 50);      //create node 
    deleteNode(&head);       //delete node (delete last)
    display(head);           //display node
    return 0;
}
/*
-----output-----
Data 10 Next 0x5577905812c0      Prev (nil)
Data 20 Next 0x5577905812e0      Prev 0x5577905812a0
Data 30 Next 0x557790581300      Prev 0x5577905812c0
Data 40 Next (nil)       Prev 0x5577905812e0
*/