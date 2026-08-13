function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log(`The ID is a number: ${id}`);
    return id;
  }

  console.log(`The ID is a string: ${id}`);
  return id;
}

console.log(printId(123));
console.log(printId("ABC123"));