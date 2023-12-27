package main

import "fmt"

type Node struct {
    value string
    next  *Node
}

type Stack struct {
    first *Node
    last  *Node
    size  int
}

func (s *Stack) unshift(val string) int {
    newNode := &Node{value: val}
    if s.first == nil {
        s.first = newNode
        s.last = newNode
    } else {
        temp := s.first
        s.first = newNode
        s.first.next = temp
    }
    s.size++
    return s.size
}

func (s *Stack) shift() string {
    if s.first == nil {
        return ""
    }
    if s.size == 1 {
        s.first = nil
        s.last = nil
    }
    temp := s.first
    s.first = temp.next
    s.size--
    return temp.value
}

func main() {
    var list Stack

    fmt.Println(list.unshift("786"))
    fmt.Println(list.unshift("ready"))
    fmt.Println(list.shift())
    fmt.Printf("%+v\n", list)
}
