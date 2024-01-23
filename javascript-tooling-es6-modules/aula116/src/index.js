class Pessoa {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and i have ${this.age} years old`
    );
  }
}

const gustavo = new Pessoa("Gustavo", 19);

gustavo.sayHello();
