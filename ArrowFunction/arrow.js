const myTodos = [{
    title: 'make a tea',
    isDone: true
},{
    title: 'go to run',
    isDone: false
},{
    title: 'attend the class',
    isDone: true
}]
 
console.log(typeof(myTodos));
const thingsDone = myTodos.filter((todo) => todo.isDone == true)
console.log(thingsDone);