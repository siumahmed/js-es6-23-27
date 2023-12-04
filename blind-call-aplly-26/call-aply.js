const noramlPerson = {
    firstName: 'Rahim',
    lastName : 'khan',
    salary : 1500,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    currrentBill:function(amount, tips,tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'hero',
    lastName : 'alom',
    salary : 2300
}


const friendlyPerson = {
    firstName: 'hero',
    lastName : 'khan',
    salary : 230
}

// const heroChargeBill = noramlPerson.currrentBill.bind(heroPerson);
// heroChargeBill(2000)
// heroChargeBill(2000)
// const friendPerson = noramlPerson.currrentBill.bind(friendlyPerson);
// friendPerson(330)
// friendPerson(330)

// noramlPerson.currrentBill.call(heroPerson,900,100,20);
// noramlPerson.currrentBill.call(heroPerson,400,30,20)
// console.log(heroPerson.salary);


noramlPerson.currrentBill.apply(heroPerson, [30, 300, 30])
console.log(heroPerson.salary);