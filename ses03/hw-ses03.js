//Class

//Class Inheritance
class Person {
// constructor=dijalankan otromatis pada saat inisialisasi class
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

// mendefinisikan class
class Employee extends Person{
    constructor(name, title){
        super(name); //?????
        this._title = title
    }
    doWork() {
        return this._name + " is working";
    }
}


let scott = new Employee("Scott Moss"); //instance
console.log(scott.getName());  //Scott Moss
console.log(scott.doWork()); //Scott Moss is working
console.log(scott.title()); //Scott Moss is working

