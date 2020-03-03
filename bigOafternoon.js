
//TOH exercise
function TOH(n, source, dest, temp) {
    if(n===1) {
        print(source, dest)
    }
    if(n===0) {
        return;
    }
    if (n > 2) {
        print(temp, dest)
    }
    TOH(n-1, source, temp, dest)
}

function print(a,b) {
    console.log(`moving ${a} to ${b}`)
}

//TOH(2, 1, 3, 2)

//Exercise 12 comments are for exercise 14

const countingSheep = function(flock) {
    for (let i=flock ; i >= 0; i--) {
        if (i === 0) {
            return console.log(`All sheep jumped over the fence!!`)
        }
        console.log(`${i} Another sheep has jumped over the fence!`)
    } 
} //O(n) linear

countingSheep(3)

const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0'
    }
    return Math.pow(base, exponent)
} //O(n)

console.log(powerCalculator(10, 3))

const reverseString = function(str) {
    return str.split('').reverse().join('')
} //O(1)

console.log(reverseString('Billy'))

const nthTriangular = function(num) {
    let sum = 0 
    for(let i = 0; i <= num; i++){
        if(num === 0){
           sum = 0
        }
        if(num === 1){
            sum = 1
        }
        sum += i
    }
    return sum
} //O(n)

console.log(nthTriangular(6))

const stringSplitter = function(string, seperator) {
    return string.split(`${seperator}`)
} //O(1)

console.log(stringSplitter('16/45/2378', '/'))

const fibo = function(number) {
    let sequence = [0,1]
    for(let i = 2; i <= number; i++) {
        sequence.push(sequence[i-2] + sequence[i -1])
    }
    return sequence[number]
}//O(n)
console.log(fibo(5))

const factorialFinder = function(num) {
    let factorial = num
    if(num === 0 || num === 1){
        return 1
    }
    for(let i = num-1 ; i >= 1; i--) {
        factorial *= i 
    }
    return factorial
}//O(n)

console.log(factorialFinder(5))