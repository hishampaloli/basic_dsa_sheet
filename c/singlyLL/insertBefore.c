#include<stdio.h>
#include<stdlib.h>
/*
Create or delete before a given value.
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
//Function to connect node(Linked List) structure (before a given value).
int addBefore(struct node **head, int item, int key) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        *head = newNode;
    }else {
        struct node *temp = *head;
        struct node *prev;
        while(temp->next != NULL) {
            if(temp->data == key) {
                prev->next = newNode;
                newNode->next = temp;
                return 0;
            }
            prev = temp;
            temp = temp->next;
        }
        printf("Element not found...\n");
    }
    return 0;
}
//Function to delete node(Linked List) structure (before a given value).
int deleteBefore(struct node **head, int key) {
    if(*head == NULL) {
        printf("List not exist...\n");
    }else {
        struct node *temp = *head;
        struct node *prev;
        struct node *pre;
        while(temp->next != NULL) {
            pre = temp->next;
            if(pre->data == key) {
                prev->next = pre;
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
    addBefore(&head, 10, 100);
    addBefore(&head, 30, 100);                
    addBefore(&head, 40, 100);                
    addBefore(&head, 50, 100);                
    addBefore(&head, 20, 30);                
    deleteBefore(&head, 50);
    display(head);                
    return 0;
}
/*
-----output-----
Data 10 Next 0x560e25c84320
Data 20 Next 0x560e25c842c0
Data 30 Next 0x560e25c84300
Data 50 Next (nil)
*/