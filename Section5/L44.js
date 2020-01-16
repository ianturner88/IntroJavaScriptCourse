// Person Constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date();
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const brad = new Person('Brad');
// const john = new Person('John');

// console.log(brad);
// console.log(john);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());