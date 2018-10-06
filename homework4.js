const triangleStars = function(height)
{
	const base = 2 * height - 1;
	let i = 0
	while(i < height) {
		console.log(' '.repeat(i) + '*'.repeat(base - 2 * i));
		i++;
	}
};
const multiToSingle = function(twoDimArr)
{
	let ans = [];
	for(let i = 0; i < twoDimArr.length;i++)
		for (let j = 0; j < twoDimArr[i].length; j++) 
			ans[ans.length] = twoDimArr[i][j];
	return ans;
};
const findMinMax = function(arr, cond)
{
	const comp = cond ? function(a,b){ return a > b;} : function(a,b) {return a < b;};
	let ans = arr[0];
	for (let i = 0; i < arr.length; i++) 
		if(comp(arr[i],ans))
			ans = arr[i];
	return ans;
};

const forEach = function(arr, func)
{
	for(let i =0; i < arr.length; i++)
		func(arr[i]);
};
const sum = function(arr)
{
	let sum = 0;
	for (let i = 0; i < arr.length; i++) 
		sum += arr[i];
	return sum;
}
const reverse = function(str)
{
	let ans = "";
	for (var i = str.length - 1; i >= 0; i--) 
		ans += str[i];
	return ans;
};
const checkerboard = function(a)
{
	const line = '* '.repeat(a);
	let i = 1;
	while(i <= a)
		console.log(' '.repeat((++i)%2) + line);
};
