// Generic
function Identify<T>(arg: T): T {
  return arg;
}

let output1 = Identify<string>("Nizomi");
let output2 = Identify<number>(12312);

console.log(output1, output2);
