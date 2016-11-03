

export  abstract class Animal  {
    private theName;
    private theVoice;

    voice() {
        console.log(this.theVoice)
    };

    eat(food:string) {
        console.log("eating" + food)
    }

    constructor(theName:string, theVoice:string) {
        this.theName = theName;
        this.theVoice = theVoice;
    };
}


