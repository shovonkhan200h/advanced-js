let number = [100,200,300,400]
const output = []
for (let i = 0; i < number.length; i++) {
    let element = number[i];
    element = Math.round(Math.random()*10)
    output.push(element)
}

console.log(output)

const result = number.map(number => number * number)

const output5 = number.map((num)=>{
    return num + num;
})
console.log(output5)


// MAP ONLY WORKS WITH ARRAY


const output2= number.filter(x => x >200)
console.log(output2)


const output3= number.find(name => name > 100 )
console.log(output3)