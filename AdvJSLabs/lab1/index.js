const todolist={
    tasks:[],
    addTask(task){
        this.tasks.push(task);
    },
   removeTask(task){
      const oldlength=this.tasks.length;
      this.tasks=this.tasks.filter(t=>t!==task);
      if(this.tasks.length<oldlength){
        console.log(`task ${task} eleminated`);
      }
      else{
        console.log(`task ${task} not found`);
      }
    },
    ListTasks(){
        const Length=this.tasks.length;
        if(Length ===0){
            console.log("no tasks available");
            return;
        }
       this.tasks.forEach(t=>console.log(t));
    }
}
function rendertask(){
    $("#taskList").empty();

    todolist.tasks.forEach(task=>{
        $("#taskList").append(`
            <li class="list-group-item d-flex justify-content-between" data-task="${task}">
                <span>${task}</span>
                <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
            </li>
        `);
    })
}
$("#addTaskBtn").click(function(){
     const task = $("#taskInput").val().trim();
     if(task ==="") return;
     todolist.addTask(task);
     $("#taskInput").val("");
     rendertask();
    
})

$("#taskList").on("click",".deleteBtn",function(){

    const task = $(this).closest("li").attr("data-task");

    todolist.removeTask(task);

    rendertask();

});