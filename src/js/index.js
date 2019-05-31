var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello,\u60A8\u597D" + this.firstName + this.lastName;
    };
    return Student;
}());
var user = new Student("王", "小明");
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();
