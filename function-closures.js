function createCounter() {
    let counter = 0

    const myFunction = function(){ // Unnamed function assigned to a variable.
        counter = counter + 1
        return counter
    }

    return myFunction
}

const increment = createCounter() // assign myFunction declaration

const c1 = increment() // execute myFunction
const c2 = increment() // 
const c3 = increment()

console.log("Example increment", c1 , c2, c3)
