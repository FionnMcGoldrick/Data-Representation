//const array
const names = [Fionn, Shayanny, Adam, Stephen];

//add task arrow function
addTask = (task)=>{
    task.push(task);
    console.log(task + " has beem added to my tasks");

}

//lists all tasks by going through each one 
let listAllTasks = ()=>{
    Tasks.forEach((element)=>{
        console.log(element);
    })

    
}

//removes one of the tasks
let splice = Task.indexOf((value)=>{
    let index = Tasks.indexOf(task);

    if(index > -1){
        Task.splice(index, 1);
        console.log(task + " has beem deleted from my tasks")
    }
    else{
        console.log("Not found in the array!");
    }
});

//calling and adding tasks
addTask("Work");
addTask("Exercise");
addTask("Sleep");
listAllTasks();
splice(2);