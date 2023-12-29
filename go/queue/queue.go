package main

import (
	"fmt"
)

// Node represents a node in the queue
type Node struct {
	Value int
	Next  *Node
}

// Queue represents a queue data structure
type Queue struct {
	First *Node
	Last  *Node
	Size  int
}

// Enqueue adds a value to the end of the queue
func (q *Queue) Enqueue(val int) int {
	newNode := &Node{Value: val}
	if q.First == nil {
		q.First = newNode
		q.Last = newNode
	} else {
		q.Last.Next = newNode
		q.Last = newNode
	}
	q.Size++
	return q.Size
}

// Dequeue removes a value from the start of the queue
func (q *Queue) Dequeue() *int {
	if q.First == nil {
		return nil
	}

	temp := q.First
	q.First = q.First.Next
	if q.First == nil {
		q.Last = nil
	}
	q.Size--

	return &temp.Value
}

func main() {
	q := Queue{}
	fmt.Println("Enqueue:", q.Enqueue(1))
	fmt.Println("Enqueue:", q.Enqueue(2))
	fmt.Println("Dequeue:", *q.Dequeue())
	fmt.Println("Dequeue:", *q.Dequeue())
	fmt.Println("Dequeue:", q.Dequeue())
}
