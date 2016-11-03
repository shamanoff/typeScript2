"use strict";
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
        console.log("eating" + food);
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=test.js.map