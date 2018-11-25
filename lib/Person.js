function Person(firstName, lastName, age){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

Person.prototype.fullName = function(){
	return this.firstName +" "+this.lastName;
}

Person.prototype.getAge = function(){
	return this.age;
}

Person.prototype.setAge = function(newAge){
	this.age = newAge
}



























// function Person(firstName, lastName, age){
//  	this.firstName = firstName;
//  	this.lastName = lastName;
//  	this.age = age;
//  }

//  Person.prototype.fullName = function(){
//  	return this.firstName+ " "+this.lastName;
//  }

// Person.prototype.setAge = function(newAge){
// 	this.age = newAge;
// }
//  Person.prototype.getAge = function(){
//  	return this.age;
//  }