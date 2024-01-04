#include<stdio.h>
#include<stdlib.h>
/*
Create or delete after a given value.
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
//Function to connect node(Linked List) structure (after a given value).
void addAfter(struct node **head, int item, int key) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        *head = newNode;
    }else {
        struct node *temp = *head;
        while(temp->next != NULL) {
            if(temp->data == key) {
                newNode->next = temp->next;
                temp->next = newNode;
                break;
            }
            temp = temp->next;
        }
        temp->next = newNode;
    }
}
//Function to delete node(Linked List) structure (after a given value).
int deleteAfter(struct node **head, int key) {
    if(*head == NULL) {
        printf("List not exist...\n");
    }else {
        struct node *temp = *head;
        struct node *prev;
        while(temp->next != NULL) {
            prev = temp;
            temp = temp->next;
            if(temp->data == key) {
                prev->next = temp->next;
                return 0;
            }
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
    addAfter(&head, 10001, 30);
    addAfter(&head, 10002, 30);
    addAfter(&head, 10003, 30);
    addAfter(&head, 30, 10002);
    deleteAfter(&head, 10002);
    display(head);                
    return 0;
}
/*
-----output-----
Data 10001      Next 0x561bf5f52300
Data 30 Next 0x561bf5f522e0
Data 10003      Next (nil)
*/