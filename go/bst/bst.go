package main

import (
	"fmt"
)

// Node represents a node in the binary search tree
type Node struct {
	Value int
	Left  *Node
	Right *Node
}

// BinarySearchTree represents a binary search tree
type BinarySearchTree struct {
	Root *Node
}

// Insert adds a new value to the binary search tree
func (tree *BinarySearchTree) Insert(value int) {
	newNode := &Node{Value: value}
	if tree.Root == nil {
		tree.Root = newNode
	} else {
		current := tree.Root
		for {
			if value < current.Value {
				if current.Left == nil {
					current.Left = newNode
					return
				}
				current = current.Left
			} else if value > current.Value {
				if current.Right == nil {
					current.Right = newNode
					return
				}
				current = current.Right
			} else {
				// Value already exists in the tree
				return
			}
		}
	}
}

// Find looks for a value in the binary search tree
func (tree *BinarySearchTree) Find(value int) *Node {
	current := tree.Root
	for current != nil {
		if value < current.Value {
			current = current.Left
		} else if value > current.Value {
			current = current.Right
		} else {
			return current
		}
	}
	return nil
}

// BFS performs a breadth-first search on the tree
func (tree *BinarySearchTree) BFS() []int {
	var result []int
	var queue []*Node

	if tree.Root != nil {
		queue = append(queue, tree.Root)
	}

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]

		result = append(result, current.Value)

		if current.Left != nil {
			queue = append(queue, current.Left)
		}
		if current.Right != nil {
			queue = append(queue, current.Right)
		}
	}
	return result
}

func main() {
	tree := BinarySearchTree{}
	tree.Insert(50)
	tree.Insert(30)
	tree.Insert(20)
	tree.Insert(70)

	fmt.Println("BFS:", tree.BFS())
}
