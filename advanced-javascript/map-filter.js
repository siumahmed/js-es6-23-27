//1st rule for square
const number = [3, 4, 5, 7, 10];
const output = [];

for (let   i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
//1st rule end

//others rules 

//function square(element){
  //  return element * element;
//}

// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

// const numbers = [3, 4, 5, 7, 10];
// const result = numbers.map(x => x * x);
// console.log(result);
//end

//filter 
const numbers = [3, 4, 5, 7, 10];
const bigger = numbers.filter(x => x > 5)
console.log(bigger);
//end

//find
const nums = [3, 4, 5, 7, 10];
const isThere = nums.find(x => x > 5 )
console.log(isThere);
//end 