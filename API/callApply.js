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

nameAs.salaryCount(1000);
console.log(nameAs.salar)