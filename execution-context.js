//Global
let a = 3

function addTwo(x) {
    let ret = a + 2
    return ret
}

let b = addTwo(a)
console.log(b)

//Lexical
function lexical(){
    let val1 = 2
    const multiplyThis = (n) => {
        let ret = n * val1
        return ret
    }
    
    let multiplied = multiplyThis(6)
    console.log('example of scope:', multiplied)

    return multiplyThis
}

{

    function -->
    all variable values that were in scope

}

let callback = multiplyThis(){}

func (callback){
    callback(10)
}