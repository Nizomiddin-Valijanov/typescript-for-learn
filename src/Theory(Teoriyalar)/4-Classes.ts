// Klasslar va tiplar

class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const CAT = new Animal("cat");
