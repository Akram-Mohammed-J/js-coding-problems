function greet(language, punctuation) {
  console.log(`${language}: Hello, ${this.name}${punctuation}`);
}

const user = { name: "Alice" };

greet.call(user, "English", "!");
// Output: English: Hello, Alice!

greet.apply(user, ["Spanish", "!"]);

const boundGreet = greet.bind(user, "French", "!");
boundGreet();
