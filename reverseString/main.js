const INPUT_STRING = 'parterretrap'     // es un palíndromo

function solution() {
    const backwards = reverseString(INPUT_STRING)

    console.log(`${INPUT_STRING} backwards is ${backwards}`)
}

function reverseString(str) {
    let ret = ''

    for (let index = str.length - 1; index >= 0; index--) {
        ret += str[index]
    }

    return ret
}

solution()
