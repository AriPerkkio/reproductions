import { apples } from "./food";

export default class Dog {
  async woof() {
    return "Woof";
  }

  eat(food?: "APPLES" | "NONE") {
    if (food === "APPLES") {
      return apples.eat();
    }

    return;
  }

  meow() {
    throw new Error("Not a cat");
  }

  run() {
    return "Running";
  }
}
