function largestFactorial(array, n){

    if(n <= 0){
        console.log("Enter POSITIVE number");
        return;
    }

    let number, maxNumber = -1;
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] === "number" && array[i] >= 0){
            number = Math.round(array[i] / n);
            if(number > maxNumber){
                maxNumber = number;
            }
        }
    }

    let factorial = 1;
    if(maxNumber < 0){
        console.log("Enter POSITIVE array elements")
    }
    else{
        for (let i = 1; i <= maxNumber; i++){
            factorial = factorial * i;
        }
        console.log(factorial);
    }

}

largestFactorial([1, 4, 27, 25], 4);