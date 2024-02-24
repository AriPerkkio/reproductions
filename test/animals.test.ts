import Dog from "../src/animals";

test("Dog says woof", async () => {
  expect(await new Dog().woof()).toBe("Woof");
});

test("Dog doesn't meow", async () => {
  expect(() => new Dog().meow()).toThrowError("Not a cat");
});

test("Cat can't fly", () => {
  expect("Cat cant fly").toBeTruthy();
});
