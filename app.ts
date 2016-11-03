
// import {Animal} from "./test";
let isDone: boolean = false;
let decimal: number =6;
let hex: number = 0xf00d;

let city:string = "sts";
let name1: string = "bob";

name1 = "smet";

let list:number[] = [1, 2, 3];

let listTuple: [string, number];
listTuple = ["vasia", 30];

// console.log(listTuple[0].substr(1));
// console.log(listTuple[1].substr(1));

let some:any;
some ="2";

let helloWorld: (input?: string)=>void;
helloWorld = (name?: string)=> {
    console.log('Hello ' +(name || ' unknown'));
};

helloWorld();
helloWorld('john');


  abstract class Animal  {
    private theName;
    private theVoice;

    voice() {
        console.log(this.theVoice)
    };

    eat(food:string) {
        console.log("eating " + food)
    }

    constructor(theName:string, theVoice:string) {
        this.theName = theName;
        this.theVoice = theVoice;
    };
}
class Dog extends Animal {

    public constructor(name: string) {
        super(name, "gav");
    }
}

let dog = new Dog("puff");
dog.eat("meat");

