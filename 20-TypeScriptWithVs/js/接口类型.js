class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}
function getUserInfo(user) {
    //console.log(user.userCode,user.userName);
    return user.firstName + "-" + user.lastName;
}
let myUser = { userName: "liqiang", userCode: "ceshi" };
let student = new Student("wang", "M.", "jun");
console.log(student);
console.log(getUserInfo(student));
