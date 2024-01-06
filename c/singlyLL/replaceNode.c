#include<stdio.h>
#include<stdlib.h>
/*
Replace and delete at a particular node.
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
// Function to replace node(Linked List) structure (with a given value).
void replaceNode(struct node **head, int item, int key) {
    struct node *newNode = createNode(item);
    if (*head == NULL) {
        *head = newNode;
    } else {
        struct node *temp = *head;
        struct node *prev = NULL;
        while (temp != NULL) {
            if (temp->data == key) {
                newNode->next = temp->next;
                if (prev == NULL) {
                    *head = newNode;
                } else {
                    prev->next = newNode;
                }
                free(temp);
                break;
            }
            prev = temp;
            temp = temp->next;
        }
        if (temp == NULL) {
            printf("Element not found...\n");
        }
    }
}
// Function to delete node(Linked List) structure (with a given value).
int deleteNode(struct node **head, int key) {
    if (*head == NULL) {
        printf("List not exist...\n");
    } else {
        struct node *temp = *head;
        struct node *prev = NULL;
        while (temp != NULL) {
            if (temp->data == key) {
                if (prev == NULL) {
                    *head = temp->next;
                } else {
                    prev->next = temp->next;
                }
                free(temp);
                return 1; 
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
    addLast(head, 60);
    addLast(head, 50);
}
// Main function.
int main(void) {
    struct node *head = NULL;
    sampleNode(&head);  // To create sample nodes.
    replaceNode(&head, 40, 60);
    deleteNode(&head , 10);
    display(head);                
    return 0;
}
/*
-----output-----
Data 20 Next 0x5638ffcd62e0
Data 30 Next 0x5638ffcd6340
Data 40 Next 0x5638ffcd6320
Data 50 Next (nil)
*/