//Classes
class UserAccount {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`O user ${this.name} tem ${this.age} anos de idade.`);
  }
}

const user1 = new UserAccount("Ryan", 17);
console.log(user1);
console.log(user1.name);
console.log(user1.logDetails());

class heroAccount extends UserAccount {
  heroNickname: string;
  level: number;
  readonly id = 7; //Prefixo readonlyé usado para tornar uma propriedade somente leitura.
  constructor(name: string, age: number, heroNickName: string, level: number) {
    super(name, age);
    this.heroNickname = heroNickName;
    this.level = level;
  }

  get levelUp(): number {
    return this.level++;
  }

  set levelChar(level: number) {
    this.level = level;
  }

  logDetails(): void {
    console.log(`O hero ${this.heroNickname} do user ${this.name} que tem ${this.age} anos de idade, possui level ${this.level}.`);
  }
}

const hero1 = new heroAccount("Ryan", 17, "Irelia", 18);
console.log(hero1);
console.log(hero1.logDetails());
console.log(hero1.level);
hero1.levelUp;
console.log(hero1.level);
hero1.levelChar = 28;
console.log(hero1.level);
