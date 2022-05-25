
function calculatorPromised(num1, num2){
    let answer

    let myPromisedAdder = new Promise(function(resolve, reject){
        setTimeout(function(){
            answer = num1 + num2;
            reject(answer)
        }, 3000);
    })


    myPromisedAdder.then(
        function(){
            console.log(answer)
        }
    ).catch(err=>{
        console.log('errorr occured ',err)
    })
    
}

calculatorPromised(5,5)