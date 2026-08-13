function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  }
}

displayValue("Hello");
displayValue(100);

function printCharacters(value: unknown): void {
  if (typeof value === "string") {
    for (const character of value) {
      console.log(character);
    }
  }
}

printCharacters("TypeScript");
printCharacters(123);