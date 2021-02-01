function sigma(num){
    var sum = 0;
    for(var i = 1; i < num + 1; i++ ){
        sum = sum + i;
    }
    return sum;

}


function factorial(num){
    var product = 0;
    for(var i = 1; i < num + 1; i++ ){
        product = product * i;
    }
    return product;

}

function fibonacci(num){
    var newNum = 0;
    var num1 = 0;
    var num2 = 1;
    for(var i = 0; i < num; i++){
        newNum = num1 + num2;
        num1 = num2;
        num2 = newNum;
    }
    return newNum;
}


function secondToLast(arr){
    if(arr.length - 1 < 1){
        var value = arr[arr.length - 1];  
    }
    else{
        var value = null;
    }
    return value;
    }


function nthToLast(arr,num){
    if(arr.length - num < 0){
        var value = arr[arr.length - num];  
    }
    else{
        var value = null;
    }
    return value;

}


function secondLargest(arr,num){
    if(arr.length - 2 < 0){ 
        var highestValue = arr[0];
        var finalValue = arr[1];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > value){
                highestValue = arr[i];
            }
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] = highestValue){
                i++;
            }
            else{
                if(arr[i] > finalValue){
                finalValue = arr[i];
                }
            }
        }
    }
    else{
        var finalValue = null;
    }
    return finalValue;
}


function doubleTrouble(arr){
    var arrnew = [];
    for(var i = 0; i < arr.length; i++){
        arrnew.push(arr[i]);
        arrnew.push(arr[i]);
    }
    return arrnew;
}



