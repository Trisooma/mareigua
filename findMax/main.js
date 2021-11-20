const ARRAY_LENGTH = 15
const MAX_INT_VALUE = 999

function solution() {
    const inputArray = makePositiveArray(ARRAY_LENGTH, MAX_INT_VALUE)

    let max = -1
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] > max) {
            max = inputArray[index]
        }
    }
    console.log(inputArray.join(','))
    console.log(`largest integer: ${max}`)
}


function makePositiveArray(length, maxVal) {
    let retval = []

    for (let index = 0; index < length; index++) {
        retval.push(Math.floor(Math.random() * maxVal))
    }

    return retval
}

solution()