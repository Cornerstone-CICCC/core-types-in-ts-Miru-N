const coordinate: [number, number] = [10, 20];

interface LocationInfo {
  description: string;
  coordinate: [number, number];
}

const locationInfo: LocationInfo = {
  description: "Downtown Vancouver",
  coordinate: coordinate,
};

console.log(locationInfo);
console.log(locationInfo.coordinate);