// Assignment: [Lab] Personable Persons
// Create two person objects with an "age" attribute and a "name" attribute.
// Then, add a "greet" method to both people. The method should accept a person
// as a parameter and outputs the following:

// "Hello, [name1]. I am [name2]. Pleased to meet you." if person1 is older than person2.
// "Yo [name2]. I'm totally [name1]. Wsup!." if person2 is older than person1.

// https://www.w3schools.com/js/js_object_definition.asp



function greet(friend) {
  if (friend.age > this.age) {
    return(`Yo ${friend.name}. I'm totally ${this.name}. Wsup!."`)
  } else {
    return(`Hello, ${friend.name}. I am ${this.name}. Pleased to meet you."`)
  }
}

let student1 = {}
student1.name = "Juliana"
student1.age = 20
student1.greet = greet

let student2 = {
  name: 'Sarah',
  age: 19,
  greet: greet
}

student1.greet(student2)
student2.greet(student1)


// Creating objects with a Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayAge() {
    return `I am ${this.age} years old`
  }
}

const greet = function(friend) {
  if (friend.age > this.age) {
    return `Yo ${friend.name}. I'm totally ${this.name}. Wsup!.`
  } else {
    return `Hello, ${friend.name}. I am ${this.name}. Pleased to meet you.`
  }
}

student1 = new Person('Juliana', 20)
student2 = new Person('Sarah', 19)

student1.sayAge()
student2.sayAge()

student1.greet = greet
student2.greet = greet

student1.greet(student2)
student2.greet(student1)
