
function add(a: number, b: number): number {
  return a + b;
}



// const result = add(1, 2);
// console.log(result);

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting = greet('Bob');
console.log(greeting);

function greetWithEmoji(name: string): string {
  return `Hello, ${name}! 👋`;
}

const greetingWithEmoji = greetWithEmoji('Bob');
console.log(greetingWithEmoji);



function greetWithEmojiAndAge(name: string, age: number): string {
  return `Hello, ${name}! 👋 You are ${age} years old.`;
}
