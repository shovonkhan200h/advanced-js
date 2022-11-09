//Slice return origian value with  new value
const nums =[1,2,3,4,5]
const result = nums.slice(0,4)
// console.log(result)



//Splice return new value with change origianal value
const result2 = nums.splice(0,3) //this also inject new value like- splice(0-s, 3-end, 77-new value)
//start with 0 mean 1 and after that delete 3 value so resulty will s-(0)1,"2,3,4"=will remove, output=5
// console.log(result2)

const result3 = nums.join(``)
console.log(result3)

