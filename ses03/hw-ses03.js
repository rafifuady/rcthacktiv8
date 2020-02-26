//Class

//Class Inheritance
class Person {
// constructor=dijalankan otromatis pada saat inisialisasi class
// satu class hanya punya satu constructor
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
        super(name); //berguna untuk manggil constructor parent 
        //jika child punya constructor
        this._title = title
    }
    doWork() {
        return this._name + " is working";
    }
}


let scott = new Employee("Scott Moss"); //instance
// console.log(scott.getName());  //Scott Moss
// console.log(scott.doWork()); //Scott Moss is working
// console.log(scott.title()); //Scott Moss is working

//#####################////
const arrayOfWords = ['cucumber','tomatos','avocado']
const complicatedArray = ['cucumber',44,true]

// makeAllCaps(arrayOfWords)
// makeAllCaps = arrayOfWords.map(y => y.toUpperCase());
// console.log(makeAllCaps);
function makeAllCaps() {
    let result = arrayOfWords.map(upperCase => upperCase.toUpperCase());
    return result
}
let capsArray = makeAllCaps()
console.log(capsArray);

function sortWords(){
    let sortedArray = testarray.sort()
    console.log(sortedArray);
}
// sortWords()
// function makeAllCaps() {
//     // let mapCaps = []
//     // let mapCaps = arrayOfWords.map(x => x.toUpperCase)
//     let map1 = arrayOfWords.map(x => x.toUpperCase);
//     console.log(map1);

//     //mapCaps[i] = arrayOfWords[i].toUpperCase();
//     return map1
// }
