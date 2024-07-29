// Funksiyalar
function getAge(): number {
  return 20;
}

const age: number = getAge();

const getAge2 = (name?: string): number => 25;

// REST
function getFullName(name: string, ...args: string[]) {
  return name + " " + args.join(" ");
}

const full_name = getFullName("Nizomiddin", "Valijanov");
