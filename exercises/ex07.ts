function printDirection(direction: "left" | "right"): void {
  if (direction === "left") {
    console.log("Turn left.");
  } else {
    console.log("Turn right.");
  }
}

printDirection("left");
printDirection("right");