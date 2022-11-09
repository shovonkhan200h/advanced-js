const stopWatch=()=>{
    let counts = 0;
    return function(){
        counts++;
        return counts;
    };
}

const clock1 = stopWatch();
console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())

const clock2 = stopWatch();
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock1())
console.log(clock1())