const nums =[1,2,3,4,5,6,7,8,9]
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element <0){
        continue;
    }
    if(element > 6){
        break;
    }
    console.log(element);
} 

const friends =[`anan`,`hridoy`,`shovon`,`nabila`]
for (let i = 0; i < 5; i++) {
    const element = friends[i];
    // console.log(element);
}