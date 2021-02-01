//1 array numbers 1 to 255
function get_array(){
	var arr = [];
	//your code here
	for(var i = 1; i < 256; i++){
		arr.push(i);
	}
	return arr;
}



//2 even sum to 1000
function sum_even_numbers(){
	var sum = 0
	//your code here
	for(var i = 1; i < 1001; i++){
		if(i % 2 === 0){
			sum += i;
		}
	}
	return sum;
}



//3 sum odd 5000
function sum_odd_5000(){
	var sum = 0
	// your code here
	for(var i = 1; i <5001; i++){
		if(i % 2 === 1){
			sum += i;
		}
	}
	return sum;
}



//4 iterate an array write function sum of all values in array
function iterArr[arr]{
	var sum = 0
	//yourcode here
	for(var i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	return sum;
}




// 5 find max given array with multiple values returns max number in array
function findMax(arr){
	//yourcode here
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}



// 6 find average given array with muliple values return average of array
function findAvg(arr){
	//your code here
	var sum = 0;

	for (var i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	return sum / arr.length;
}



//7 array odd function that would return array of odd numbers between 1 and 50
function oddNumbers(){
	var arr = [];
	//your code here
	for(var i =1; i <= 50; i++){
		if(i % 2 === 1){
			arr.push(i);
		}
	}
	return arr;
}


//8 greater than Y return numbers that are greater than Y
function greaterY(arr, Y){
	//your code here
	var count = 0;
	for( var i = 1; i < arr.length; i++){
		if(arr[i] > Y){
			count++;
		}
	}
	return count;
}

//9 square array with mulitple values number of orginal value tiems itself
function squareVal(arr){
	//your code here
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i] * arr[i];
	}
	return arr;
}


//10 negatives replace any negatives with 0
function noNeg(arr) {
	//your code here
	for(var i =0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 0
		}
	}
	return arr;
}



//11 max/min/avg
function maxMinAvg(arr){
	//your code here
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
		if(arr[i] < min){
			min = arr[i];
		}
		sum = sum + arr[i];
	}
	var avg = sum / arr.length;
	var arrnew = [max, min, avg];
	return arrnew;
}

//12 swap 1st land last values of any array 
function swap(arr){
	//your code here
	var temp. = arr[0];//temp =1
	arr[0] = arr[arr.length -1]; //arr[0]= -2
	arr[arr.length - 1] = temp //arr[3] = 1
	return arrnew;
}




//13 number to string array of numbers replaces negative with Dojo
function numToStr(arr){
//your code here
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = "Dojo";

		}
	}	
return arr;
}






