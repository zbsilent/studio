
jQuery('选择器')
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 23, 2];

//document.body.innerHTML = greeter(user);
console.log(greeter(user[1].toString()));
document.body.innerHTML = greeter(user[1].toString());
// import jQuery from 'jquery'

// jQuery('选择器').ajaxSend()