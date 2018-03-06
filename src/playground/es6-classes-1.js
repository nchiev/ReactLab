//Add constructor to take age
// getDescription - Narath Is 
class Person{
    constructor(name = "John/Jane Doe", age = 0) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        //return "Hi, this is " + this.name + "!";
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    } 
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor(){
       return !!this.major;
    }
    getDescription(){
        return `${this.name} is ${ this.hasMajor() ? `${this.major} student and is `: ""}${this.age} year(s) old.`;
    }
}

class Traveler extends Person {
    constructor(name = "John/Jane Doe", age = 0, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(!!this.homeLocation){
            greeting += ` I'm from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler("Narath Chiev",30, "Killadelphia");
const other = new Traveler();
console.log(me.getGreeting());
console.log(other.getGreeting());