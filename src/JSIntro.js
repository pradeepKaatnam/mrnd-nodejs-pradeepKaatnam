
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
		sum+=arrayOfNums[i];
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	arrayOfNums.sort();
	var sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
		if(arrayOfNums[i]==arrayOfNums[i+1])
			continue;
		else {
			sum+=arrayOfNums[i];
			//console.log(sum);
		}
	return sum;
}

exports.ReverseString = function(str){
	var string="";
	for(var i=str.length-1;i>=0;i--)
		string=string.concat("",str[i]);
	//console.log(string);
	return string;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var revArray=[],temp,index=0;
	for(var i=0;i<arrayOfStrings.length;i++)
	{
		temp=arrayOfStrings[i];
		var string="";
		for(var j=temp.length-1;j>=0;j--)
			string+=temp[j];
		revArray[index++]=string;
	}	
	return revArray;

}