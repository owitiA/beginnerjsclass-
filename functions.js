//remember to start with the word function when declaring one 



var num = [30,25,47,96,1,0];
//in an instance where you have a recurring number and you were looking for a number in an array it wil stop there
//THE SUBSTITUTION MODEL :callbyname ,callbyvalue:

//lets sort the array now 
var sortedArray = num.sort(function(x,y){return x-y });

function inArray(arrayTocheck,value)
{
//we use a for loop for it to go through till the end of the array 
	for(i=0; i = arrayTocheck.length;i++)
	{
		if (arrayTocheck[i] === value)
		{
			return true;
		}
			return false;

	}

}
inArray(num, 4)


function  add2(x,y)
{
	return x+y 
}

function add3(func,x)
{
	return func(y)
}

//THE SUBSTITUTION MODEL 

add2(4,5); //done in just 2 steps 
add2(4*2,6); //works in 3 steps :callbyvalue 
add2(4,9+8);//3 steps :callbyname/reference

add2(add3(4),6);

var tripple = function (num)
{
	return num*3;

}

add3(tripple,4
)

//recursive function :this is defined as  a reptition of a certain step or function 

function factorial(num)
{
	if(num <=1)
	{
		return 1;
	}
	

}
else 
{
	return num*factorial(num*3)
}
factorial(4)
//try implementing this using the fibonacci series 

function fibonnaci(num)
{

	var x=0 ,y=1 ,f= 1;
	for (var i=2 ;i <=num; i++)
	{
		f=x+y;
		x=y ;
		y= f;

	}
return f ;

};