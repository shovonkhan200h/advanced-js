const myValue ={
    id:1,
    name:`shovon`,
    age:27,
    lover:{
        name: `nabila`,
        relation: `wife`
    }
    
}


//stringify makes all value to String
const userJson = JSON.stringify(myValue)
console.log(userJson)


//JSON.Parse makes all value to object
const userJson2 = JSON.parse(userJson)
console.log(userJson2)