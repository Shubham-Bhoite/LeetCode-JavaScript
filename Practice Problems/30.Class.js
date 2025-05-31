// 30. Write a Program to create a simple class in JavaScript :



class Animals {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}
let dog = new Animals("Dog");
dog.speak();
