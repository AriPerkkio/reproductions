import { apples } from "./food";

export default class Dog {
  async woof() {
    apples.eat();

    return "Woof";
  }

  meow() {
    throw new Error("Not a cat");
  }

  run() {
    return "Running";
  }
}
