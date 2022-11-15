const printName = (name) => "Hi " + name;
console.log(printName("Mahitha"))
//

const printBill = (name, bill) => {  
   return `Hi ${name}! Please pay ${bill}`;
}
console.log(printBill("Mahitha", 1000))

//
const person = {
    first_name: "Mahitha",
    age: 21
}

let { first_name, age } = person;
console.log('Name:' + first_name + ' Age:' + age)