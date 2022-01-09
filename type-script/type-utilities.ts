//Type Utilities
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: "Learn TypeScript",
  description: "Learn TypeScript and become a TypeScript Ninja",
  completed: false,
};
console.log(todo);

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
//Partial deixa as propriedade como opcionais

const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);

type TodoPreview = Pick<Todo, "title" | "description">;
//Pega as propriedades que queremos
const Todo3: TodoPreview = {
  title: "Learn TypeScript",
  description: "Learn TypeScript and become a TypeScript Ninja",
};

type TodoPreview2 = Omit<Todo, "description">;
//Omiti as propriedades que não queremos
const Todo4: TodoPreview2 = {
  title: "Learn TypeScript",
  completed: false,
};

//Devemos analisar o caso para saber qual é mais adequado
