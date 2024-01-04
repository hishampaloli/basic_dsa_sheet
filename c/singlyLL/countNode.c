#include<stdio.h>
#include<stdlib.h>
/*
To count the nodes in a Linked List.
*/
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
    }
}
// Function to check the count of present node.
int countNode(struct node **head) {
    if(*head == NULL) {
        return 0;
    }else {
        int count = 0;
        struct node *temp = *head;
        while(temp != NULL) {
            count++;
            temp = temp->next;
        }
        return count;
    }
}
//Function to the available nodes.
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
    addLast(&head, 10);      //create node (insert last)
    addLast(&head, 20);      //create node      
    addLast(&head, 30);      //create node 
    addLast(&head, 40);      //create node 
    addLast(&head, 50);      //create node 
    printf("Total no of Node : %d\n", countNode(&head));
    return 0;
}
/*
-----output-----
Data 10 Next 0x564f6374d2c0
Data 20 Next 0x564f6374d2e0
Data 30 Next (nil)
*/