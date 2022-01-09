//bollean (true/false)
let isDone: boolean;
isDone = false;

// number (int, float, hex, binary)
let decimal: number;
decimal = 10;

// string ("string", 'string', `string`)
let color: string;
color = "blue";

// array (type[])
let list: number[];
list = [1, 2, 3];

let list2: Array<number>;
list2 = [1, 2, 3];

let list3: Array<string>;
list3 = ["a", "b", "c"];

// tuple (type[])
let tuple: [string, number];
tuple = ["hello", 10];

// enum
enum Colors {
  Red = "FF0000",
  Green = "00FF1F",
  Blue = "0000FF",
}
let corActual: Colors = Colors.Green;

// any (qualquer coisa)
let notSure: any;
notSure = "hello";
notSure = 10;

// void (nada/vazio)
function warnUser(): void {
  console.log("This is my warning message");
}

// null e undefined
type Blah = string | undefined;

// never (nunca vai retornar)
function error(message: string): never {
  throw new Error(message);
}

// object (qualquer coisa que não seja string, bollean, number, array, etc)
let cart: object;
cart = {
  name: "cart",
  price: 10,
  quantity: 10,
};
