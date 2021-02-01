/*
    Array: Concat
    .push allowed
    Replicate JavaScript’s concat() . Create a standalone function
    that accepts two arrays. Return a new array containing the first
    array’s elements, followed by the second array’s elements. Do not
    alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should
    return new array ['a','b',1,2] .
*/

function concatenate(arr1, arr2){
    var arr3 = [];
        // for loop push arr1 indexes to arr3
        for (var i = 0; i < arr1.length; i++){
            arr3.push(arr1[i]);
        }
        for (var i = 0; i < arr2.length; i++){
            arr3.push(arr2[i]);
        }
        return arr3;
}
console.log(concatenate(['a','b'], [1,2]));
console.log(concatenate([1,2,3,4,5],[5,4,3,2,1]));


/*
    Array: Reverse
    Given a numerical array, reverse the order of values, in-place.
    The reversed array should have the same length, with existing elements
    moved to other indices so that order of elements is reversed. Working
    ‘in-place’ means that you cannot use a second array – move values within
    the array that you are given . As always, do not use built-in array
    functions such as splice() .
*/

function reverse(arr){
    // switch arr[i] with arr[arr.length - 1 - i]
    for (var i = 0; i < arr.length / 2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]));
console.log(reverse([654654,989461,9874654,3,3]));