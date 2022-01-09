//Type aliases
type Uid = number | string;

function logProduct(product: string, uid: number | string): void {
  console.log(`${product} - ${uid}`);
}

//Com o type alias, podemos definir um tipo que é uma combinação de outros tipos.
function logShoes(shoe: string, uid: Uid): void {
  console.log(`${shoe} - ${uid}`);
}

type Platform = "Windows" | "Mac" | "Linux" | "Android" | "iOS";

function renderPlatform(platform: Platform): void {
  console.log(`${platform}`);
}

renderPlatform("Windows");
logProduct("Celular", 10234328);
logShoes("Classic", "293849");

type UserInfo = {
  name: string;
  age: number;
  level?: number; //? indica que o level é opcional
};

const user: UserInfo = {
  name: "John",
  age: 30,
  level: 1,
};

const user2: UserInfo = {
  name: "Ryan",
  age: 17,
};

// intersection
type pet = {
  petName: string;
  petSpecies: string;
  color: string;
};

const pet1: pet = {
  petName: "Rex",
  petSpecies: "Dog",
  color: "White",
};

type UserPetShop = UserInfo & pet;

const user3: UserPetShop = {
  name: "Robsu",
  age: 27,
  petName: "Lulu",
  petSpecies: "Dog",
  color: "Black",
};
