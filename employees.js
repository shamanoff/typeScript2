var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function () {
    function Employee(name, sallary) {
        this._name = name;
        this._sallary = sallary;
    }
    Employee.prototype.sayHello = function () { console.log(this._name); };
    ;
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "sallary", {
        get: function () {
            return this._sallary;
        },
        set: function (value) {
            this._sallary = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(name, sallary) {
        _super.call(this, name, sallary);
        this.employees = [];
    }
    Manager.prototype.addDev = function (e) {
        this.employees.push(e);
        e.myManager = this;
    };
    Manager.prototype.getAll = function () {
        this.employees.toString();
    };
    return Manager;
}(Employee));
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(myManager, name, sallary) {
        _super.call(this, name, sallary);
        this._myManager = myManager;
    }
    Object.defineProperty(Developer.prototype, "myManager", {
        get: function () {
            return this._myManager;
        },
        set: function (value) {
            this._myManager = value;
        },
        enumerable: true,
        configurable: true
    });
    return Developer;
}(Employee));
var manager = new Manager("Vasili", 20000);
var developer = new Developer(manager, "Kolya", 10000);
manager.addDev(developer);
console.log(developer.myManager);
console.log(manager.getAll());
//# sourceMappingURL=employees.js.map