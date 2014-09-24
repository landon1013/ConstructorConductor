//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

//Now create three instances of Person with data you make up

var landon = new Person("Landon", 24);
var mike = new Person("Mike", 24);
var matt = new Person("Matt", 24);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
    alert("Hello my name is " + this.name);
}