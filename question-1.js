// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
//myTodo.push({ id: 5, todo:"Walk the dog"});
//console.log(myTodo);
myTodo.pop()
console.log(myTodo);
myTodo.push({ id: 4, todo: "Go to the gym"})
console.log(myTodo);
myTodo.push({ id: 5, todo:"Walk the dog"});
console.log(myTodo);
myTodo.pop()
console.log(myTodo);

let LastThingTodo = myTodo[3];
let id = LastThingTodo.id;
let todo = LastThingTodo.todo;
console.log(myTodo[3]);

console.log(`"To-do id: ${LastThingTodo.todo}`);