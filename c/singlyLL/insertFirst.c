#include<stdio.h>
#include<stdlib.h>
//User defined data type.
struct node {
    int data;
    struct node *next;
};
//Function to create new node(Linked List) structure.
struct node *createNode(int item) {
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->data = item;
    newNode->next = NULL;
    return newNode;
}
//Function to connect node(Linked List) structure (insert first).
void addLast(struct node **head, int item) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        *head = newNode;
    }else {
        newNode->next = *head;
        *head = newNode;
    }
}
//Function to delete node(Linked List) structure (delete first).
void deleteNode(struct node **head) {
    if(*head == NULL) {
        printf("List not exist...\n");
    }else {
        *head = (*head)->next;
    }
}
//Function to print the available nodes.
void display(struct node *head) {
    if(head == NULL) {
        printf("Empty List...\n");
    }else {
        struct node *temp = head;
        while(temp != NULL) {
            printf("Data %d\tNext %p\n", temp->data, temp->next);
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
    deleteNode(&head);       //delete node 
    display(head);           //display node
    return 0;
}

/*
-----output-----
Data 20 Next 0x557130fad2a0
Data 10 Next (nil)
*/