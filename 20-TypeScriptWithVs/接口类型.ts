
class Student{
    fullName:string;
    constructor(public firstName,public middleInitial, public lastName) {
      
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

interface User {
    firstName: string;
    lastName: String;
}

function getUserInfo(user: User) {
  //console.log(user.userCode,user.userName);
  return user.firstName + "-" + user.lastName;
}
let myUser = { userName: "liqiang", userCode: "ceshi" };



let student =new Student("wang","M.","jun");
console.log(student);
console.log(getUserInfo(student));
