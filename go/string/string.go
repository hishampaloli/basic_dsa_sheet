package main

import (
    "fmt"
    "strings"
)

func reverseWords(s string) string {
    words := strings.Split(s, ".")
    for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
        words[i], words[j] = words[j], words[i]
    }
    return strings.Join(words, ".")
}



func isPalindrome(s string) int {
    for i, j := 0, len(s)-1; i < len(s)/2; i, j = i+1, j-1 {
        if s[i] != s[j] {
            return 0
        }
    }
    return 1
}


func main() {
    sentence := "i.like.this.program.very.much"
    reversed := reverseWords(sentence)
    fmt.Println(reversed)

	result := isPalindrome("malayalam")
    fmt.Println(result)
}
