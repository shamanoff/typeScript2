var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// import {Animal} from "./test";
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var city = "sts";
var name1 = "bob";
name1 = "smet";
var list = [1, 2, 3];
var listTuple;
listTuple = ["vasia", 30];
// console.log(listTuple[0].substr(1));
// console.log(listTuple[1].substr(1));
var some;
some = "2";
var helloWorld;
helloWorld = function (name) {
    console.log('Hello ' + (name || ' unknown'));
};
helloWorld();
helloWorld('john');
var Animal = (function () {
    function Animal(theName, theVoice) {
        this.theName = theName;
        this.theVoice = theVoice;
    }
    Animal.prototype.voice = function () {
        console.log(this.theVoice);
    };
    ;
    Animal.prototype.eat = function (food) {
        console.log("eating " + food);
    };
    ;
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        _super.call(this, name, "gav");
    }
    return Dog;
}(Animal));
var dog = new Dog("puff");
dog.eat("meat");
//# sourceMappingURL=app.js.map