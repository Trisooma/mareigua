package main

import (
    "fmt"
)

func solution() {
    for counter := 1; counter <= 100; counter += 1 {
        if multipleOf3(counter) && multipleOf5(counter) {
            fmt.Println("mareigua")
        } else if multipleOf3(counter) {
            fmt.Println("mare")
        } else if multipleOf5(counter) {
            fmt.Println("igua")
        } else {
            fmt.Println(counter)
        }
    }
}

func multipleOf3(num int) bool {
    return num % 3 == 0
}

func multipleOf5(num int) bool {
    return num % 5 == 0
}

func main() {
    solution()
}
