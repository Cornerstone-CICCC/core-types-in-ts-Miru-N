function throwError(message: string): never {
  throw new Error(message);
}

try {
  throwError("Something went wrong.");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

function throwErrorVoid(message: string): void {
  throw new Error(message);
}

try {
  throwErrorVoid("This error uses void.");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

function returnVoid(): void {
  return;

  // return "Hello";
  // This would cause a TypeScript error because
  // a void function should not return a string.
}

returnVoid();