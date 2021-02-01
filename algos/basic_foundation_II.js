function biggieSize(){
    for(var i = 0; i < arr.length;i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

// var arr= [4,12,-3,5,7,-9]
// console.log(biggieSize());


function printLowHigh(arr){
    var lowest = arr[0];
    var highest = arr[0];
    for (var i = 0;i < arr.length; i++){
        if (arr[i] < lowest){
        lowest = arr[i];
        }
        if (arr[i] > highest){
        highest = arr[i]
        }
        }
        console.log(lowest);
        return highest;
        

    // var y = [4,12,-3,5,7,-9];
    // console.log(printLowHigh(y));




function printOneReturn(arr){
console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !==0){
        return arr[i];
        }
    }
}
// var y =  [4,12,-3,5,7,-9];
// console.log(printOneReturn(y));


function doubleVision(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}

// var y =  [4,12,-3,5,7,-9];
// console.log(doubleVision(y));


function countPositives(arr)
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum++;
        }
    }    
    arr[arr.length -1] = sum;
    return arr;
}
// var y =  [4,12,-3,5,7,-9];
// console.log(countPositives(y));


function evensOdds(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            if(arr[i+1] % 2 == 1){
                if(arr[i+2] % 2 == 1){
                    console.log("That's Odd");   
                }
            }
        }
        if(arr[i] % 2 == 0){
            if(arr[i+1] % 2 == 0){
                if(arr[i+2] % 2 == 0){
                    console.log("Even more so!");
                }
            }
        }
}
// var y = [1,3,5,4,4,1,4,6,8];
// evensOdds(y);



function incrementTheSeconds(arr){
    for (var i = 0; i < arr.length; i++){
        if(i % 2 == 1){
            arr[i] = arr[i] + 1;
            console.log[i];
        }
        
    }
    return arr;
}




function previousLength(arr){
    for(var i = arr.length - 1 ; i > 0 ; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

// var y = ["Hello","World","Bye","World"];
// console.log(previousLength(y));


function addSeven(arr){
    var arrnew = [];
    for(var i = 0; i < arr.length; i++){
        arrnew.push(arr[i] + 7);
    }
    return arrnew;
}





function reverseArray(arr){
    for(var i = 0; i < arr.length/2 ; i++){
        var temp = arr[i];
        arr[i] =  arr[arr.length-1 - i]; 
        arr[arr.length-1 - i] = temp;
    }
    return arr;
}



