function solution() {
    for (let counter = 1; counter <= 100; counter++) {
        let output = multipleOf3(counter) && multipleOf5(counter) ? 'mareigua'
            : multipleOf3(counter) ? 'mare'
                : multipleOf5(counter) ? 'igua'
                    : counter
        console.log(output)
    }
}

let multipleOf3 = num => num % 3 === 0
let multipleOf5 = num => num % 5 === 0

solution()