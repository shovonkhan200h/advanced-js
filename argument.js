const number =(num1,num2)=>{
    console.log([...arguments])
    return num1 + num2 + arguments[2]
}

const result =number(5,5,5)
console.log(result);