abstract class Employee {

    private _name: string;
    private _sallary: number;

    sayHello(){console.log(this._name)};
    constructor(name: string, sallary: number){
        this._name = name;
        this._sallary = sallary;
    }


    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get sallary():number {
        return this._sallary;
    }

    set sallary(value:number) {
        this._sallary = value;
    }
}

class Manager extends Employee{
    private employees: Employee[] = [];
    addDev(e:Employee){
        this.employees.push(e);
        (<Developer>e).myManager = this;
    }
    getAll(){
        this.employees.toString()
    }
    constructor(name:string, sallary:number) {
        super(name, sallary);
    }
}

class Developer extends Employee{


    private _myManager: Employee;

    set myManager(value:Employee) {
        this._myManager = value;
    }


    get myManager():Employee {
        return this._myManager;
    }

    constructor(myManager: Employee, name:string, sallary:number) {
        super(name, sallary);
        this._myManager = myManager;
    }
}

let manager = new Manager("Vasili", 20000);

let developer = new Developer(manager, "Kolya", 10000);

manager.addDev(developer);
console.log(developer.myManager);
console.log(manager.getAll());
