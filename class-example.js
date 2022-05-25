class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age(year) + " years old.");

  let myCar1 = new Car("hYUNDAI", 2020);
  console.log("My car is " + myCar1.age(year) + " years old.");

