const nameAs={
    firstName:`shovon`,
    lastName:`khan`,
    salar:6000,
    getFullName:function(){
        console.log(this.firstName, this.lastName);
    },
    salaryCount:function(amount){
        this.salar = this.salar - amount;
        return this.salar;
    }

}


const heroPerson ={
    firstName:`jameal`,
    lastName:`dhuru`,
    salar:10000 
}

const heroPersons ={
    firstName:`jameal`,
    lastName:`dhuru`,
    salar:20000 
}

// nameAs.salaryCount(1000);
// console.log(nameAs.salar)

const values =nameAs.salaryCount.bind(heroPerson)
const valuess =nameAs.salaryCount.bind(heroPersons)
console.log(valuess(100))