function cube(n) {
	return n*n*n
}

var cube = function(n) {
	return n*n*n;
};

alert(cube(2));
function foo1(a) {
	a = 100;
	console.log("Inside the function, a is:" + a);
}

function foo2(myObject) {
	myObject.fname = "John";
}

function foo3(myObject) {
	myObject = {fname: "Jane", lname: "Dizon", age: 25};
}

var person = {
	fname: "Juan",
	lname: "Dela Cruz",
	age:50
};

function changeName(newFName, newLName) {
	this.fname = newFName;
	this.lname = newLName;
}

function updateAge(newAge) {
	this.age = newAge;
}

function student(fname, lname, age) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;

	this.changeName = changeName;
	this.updateAge = updateAge;
}
