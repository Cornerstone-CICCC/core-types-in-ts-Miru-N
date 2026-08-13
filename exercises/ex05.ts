enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const currentDay: Day = Day.Thursday;

console.log(Day[currentDay]);

interface Race {
  participants: string[];
  first: string;
  second: string;
  third: string;
  day: Day;
}

const race: Race = {
  participants: ["Anna", "Bob", "Chris"],
  first: "Anna",
  second: "Bob",
  third: "Chris",
  day: Day.Saturday,
};

console.log(race);
console.log(Day[race.day]);