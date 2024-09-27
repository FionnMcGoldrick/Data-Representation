const names = [Fionn, Shayanny, Adam, Stephen];


addTask = (task)=>{
    task.push(task);
    console.log(task + " has beem added to my tasks");

}

let listAllTasks = ()=>{
    Tasks.forEach((element)=>{
        console.log(element);
    })

    
}

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

addTask("Work");
addTask("Exercise");
addTask("Sleep");
listAllTasks();
splice(2);