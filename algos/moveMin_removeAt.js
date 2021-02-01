/*   Array: Min to Front  Given an array of comparable values, move the lowest   element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s   order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and   return min. As always, do this without using built-in functions.*/


function moveMin(arr) {
    var min = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    for (let j = index; j > 0; j--) {
        arr[j] = arr[j - 1]
    }
    arr[0] = min
    return arr;
}
console.log(moveMin([2, 4, 1, 6, 3]));



/*  Array: Remove At Given array and an index, remove and return the array value at that index. Do this without using built-in array methods except pop().*/



function removeAt(arr, index){
    temp = arr;
    arr = [];
    for (let i = 0; i < temp.length; i++) {
        if (i === index) {
            continue;
        } else {
            arr.push(temp[i])
        }
    }
    return arr
};
const array2 = [0, 1, 2, 3, 4, 5, 6];
console.log(removeAt(array2, 2));




// bonus
function flatten(arr1, arr2, arr3){
    var arr4 = [];
        
        for (var i = 0; i < arr1.length; i++){
            arr4.push(arr1[i]);
        }
        for (var i = 0; i < arr2.length; i++){
            arr4.push(arr2[i]);
        }
        for (var i = 0; i < arr3.length; i++){
            arr4.push(arr3[i]);
        }
        return arr4;
}
console.log(flatten([1,2,3], [4,5,6], [7,8,9]));

