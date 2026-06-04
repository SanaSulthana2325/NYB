//RECURSIVE FUNCTION:it is function that calls itself until a specific condition is met

//
function countDown(num){
    if (num === 0){
        console.log("finished")
        return
    }
    console.log(num)
    countDown(num - 1)
}
countDown(9)

//opening a folder
function openFolder(level){
    if(level === 0){
        return
    }
    console.log("Opening Folder Level" + level)
    openFolder(level -1)
}
openFolder(4)

// password Attempts
function loginAttempt(attempts){
    if(attempts === 0){
        console.log("Account Locked")
        return
    }
    console.log("Attempts left:" + attempts)
    loginAttempt(attempts - 1)

}
loginAttempt(5)

// factorail
function factorial(n){
    if(n === 1){
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(7))

// iterative solution
function factorial(n){
    let results = 1
    for (let i= 1;i<=n; i++){
        results *= i
    }
    return results
}
console.log(factorial(6))


// sum of numbers
function sum(n){
    if(n === 1){
        return 1;
    }
    return n + sum(n- 1)
}
console.log(sum(6))

// iteration:
function sum(n){
    let total = 0
    for (let i= 1;i<=n;i++){
        total += i
    }
    return total
}
console.log(sum(8))

//reply comments
function showReplies(count){
    if(count === 0)
        return
    console.log("Reply " + count)
    showReplies(count - 1)
}
showReplies(4)

// recursive fabonacci program
function fibonacci(n){
    if(n <=1){
        return n
        }
        return fibonacci(n - 1) + fibonacci(n - 2)

}
console.log(fibonacci(6))

//print fibonacci series
function fibonacci(n){
    if(n<=1){
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)

}
for (let i = 0; i < 9; i++){
    console.log(fibonacci(i))
}

// number triangle

function numberTriangle(n, current =1){
    if(current>n){
        return
    }
    console.log(String(current).repeat(current))
    numberTriangle(n, current + 1)
}
numberTriangle(9)

//iteration
for(let i = 1;i<=7; i++){
    console.log("^".repeat(i))
}


// central pyramid
function centerPyramid(rows, current = 1){
    if (current > rows){
        return
    }
    let spaces = " ".repeat(rows - current)
    let numbers = "5".repeat(5 *current - 1)
    console.log(spaces + numbers)
    centerPyramid(rows, current + 1)

}
centerPyramid(7)


//ierative approach: a loop repeats until a condition becomes false
for (let i =5; i >=1; i--){
    console.log(i)

}

// reverse pyramid
// iteration
for(let i =8;i>=1;i--){
    console.log("*".repeat(i))
}

// recursion
function reverseTriangle(n){
    if ( n===0){
        return
    }
    console.log("8".repeat(n))
    reverseTriangle(n-1)
}
reverseTriangle(8)

//
function numberTriangle(n, current =8){
    if(current>n){
        return
    }
    console.log(String(current).repeat(current))
    numberTriangle(n, current - 1)
}
numberTriangle(1)


// advantages of recursion:
//1.it is simple and easy to inder stand
// 2. good for tree structure : it is perfect for hierarchical data
// 3. useful to nested data
// 4.makes clear implementation
// 5.reduce complex loops


// disadvantages of recursion:
//1. uses more memory: every recursive call stored in the call stack
// 2.usually slower than iteration
// 3.program crashes
// 4.debugging is sometimes more challenging
// 5. requires a proper base case





