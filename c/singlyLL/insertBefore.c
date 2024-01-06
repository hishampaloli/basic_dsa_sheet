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
//Function to connect node(Linked List) structure (before a given value).
int addBefore(struct node **head, int item, int key) {
    struct node *newNode = createNode(item);
    if(*head == NULL) {
        *head = newNode;
    }else {
        struct node *temp = *head;
        struct node *prev;
        while(temp != NULL) {
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
void sampleNode(struct node **head) {
    addLast(head, 10);
    addLast(head, 20);
    addLast(head, 30);
    addLast(head, 50);
}
// Main function.
int main(void) {
    struct node *head = NULL;
    sampleNode(&head);  // To create sample nodes.
    addBefore(&head, 40, 50);
    deleteBefore(&head, 40);
    display(head);                
    return 0;
}
/*
-----output-----
Data 10 Next 0x555c6597c2c0
Data 20 Next 0x555c6597c320
Data 40 Next 0x555c6597c300
Data 50 Next (nil)
*/