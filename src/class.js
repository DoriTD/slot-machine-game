let calc = new Calculator(2);
console.log(calc.add(3));

class Calculator {
  constructor(num) {
    this.number = num;
  }
  add(number) {
    return number + this.number;
  }
}
