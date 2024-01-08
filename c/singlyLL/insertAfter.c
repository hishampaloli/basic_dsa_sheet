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
            if(prev->data == key) {
                prev->next = temp->next;
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
    addAfter(&head, 10001, 10);
    addAfter(&head, 10002, 20);
    addAfter(&head, 10003, 30);
    deleteAfter(&head, 10001);
    display(head);                
    return 0;
}
/*
-----output-----
Data 10 Next 0x561bb960a320
Data 10001      Next 0x561bb960a340
Data 10002      Next 0x561bb960a2e0
Data 30 Next 0x561bb960a360
Data 10003      Next 0x561bb960a300
Data 50 Next (nil)
*/