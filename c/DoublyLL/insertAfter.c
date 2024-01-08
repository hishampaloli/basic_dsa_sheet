#include<stdio.h>
#include<stdlib.h>
/*
Doubly Linked List to create and delete after a given value.
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
//Function to connect node(Linked List) structure (after a given value).
int addAfter(struct node **head, int item, int key) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        printf("Empty List...\n");
    }else {
        struct node *temp = *head;
        while(temp != NULL) {
            if(temp->data == key) {
                newNode->next = temp->next;
                newNode->prev = temp;
                temp->next = newNode;
                return 0;
            }
            temp = temp->next;
        }
        printf("Element not found...\n");
    }
    return 0;
}
//Function to delete node(Linked List) structure (after a given value).
int deleteAfter(struct node **head, int key) {
    if(*head == NULL) {
        printf("List not exist...\n");
    }else {
        struct node *temp = *head;
        struct node *prev;
        while(temp != NULL) {
            if(prev->data == key) {
                prev->next = temp->next;
                temp = temp->prev;
                return 0;
            }
            prev = temp;
            temp = temp->next;
        }
        printf("Element not found...\n");
    }
    return 0;
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
    addLast(head, 40);
    addLast(head, 50);
}
// Main function.
int main(void) {
    struct node *head = NULL;
    sampleNode(&head);  // To create sample nodes.
    addAfter(&head, 60, 50);
    addAfter(&head, 70, 60);
    deleteAfter(&head, 60);
    display(&head);
    return 0;
}
/*
-----output-----
Data 10 Prev (nil)       Next 0x558b4eaeb2c0
Data 20 Prev 0x558b4eaeb2a0      Next 0x558b4eaeb2e0
Data 30 Prev 0x558b4eaeb2c0      Next 0x558b4eaeb300
Data 40 Prev 0x558b4eaeb2e0      Next 0x558b4eaeb320
Data 50 Prev 0x558b4eaeb300      Next 0x558b4eaeb340
Data 60 Prev 0x558b4eaeb320      Next (nil)
*/