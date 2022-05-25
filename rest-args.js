let object ={}, n =100, i =1

while(i<=n){

    object[i] =i

    object[`_${i}`] = i
    i++
}

console.log(object)

let{_10, _20, _30, _40, _50, ...rest} = {...object}

console.log(_10)
console.log(_20)
console.log(_30)
console.log(_40)
console.log(_50)


console.log(others)


