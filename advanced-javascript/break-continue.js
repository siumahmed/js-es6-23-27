const nums = [1,-2,3,4,-5,-6]

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 3){
        break;
    }
   // console.log(i);
}

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        continue;
    }
    console.log(i);
}