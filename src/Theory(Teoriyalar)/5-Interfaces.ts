//Interfacelar

interface Profile {
  name: string;
  age: number;
  admin: boolean;
}

interface Work {
  place: string;
}

interface Adding extends Profile {
  something: unknown;
}

const profile: Profile = {} as Profile;
const test: Adding = {} as Adding;
