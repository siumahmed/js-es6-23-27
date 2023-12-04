const nam = 'arman'

function add(num1, num2){
    const result = num1 + num2;
    console.log("result inside",nam);
    function doubleIt(number){
        return number * 2;
    }
    const total = doubleIt(result);
    return total;
}
console.log('outsude name' , nam );
var sum = add(2,3);
console.log(sum);