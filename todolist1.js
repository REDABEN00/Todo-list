function addTask() {
    //alert(1)
    //target the newtask input
    var newtaskinput = document.getElementById('newTask')
    //get the value of the input
    //console.log(newTaskInput.value)
    var newTaskValue = newtaskinput.value
    // vider l'input
    newtaskinput.value=""
    //if value empty
    if (newTaskValue == "") alert("Invalid value try again dude !")
    else {
        // create the li tag and put the value init
        var litag = `
        <li class="list-group-item d-flex bd-highlight mb-3 ">
                    <span class="fs-4 ">${newTaskValue}</span>
                    <button class="btn btn-danger ml-auto p-2 bd-highlight mr-2 " onclick="deleteTask(this)"><i class="far fa-trash-alt"></i>
                    </button>
                    <button class="btn btn-success p-2 bd-highlight"><i class="fas fa-edit"></i> </button>
                </li>`
        //target the list of tasks (ul)
        var listTaskUl = document.getElementById("listTasks")
        //add li element for ul 
        listTaskUl.innerHTML += litag

    }
}
function deleteTask(x){
    if (confirm("Are you sure ?")){
        x.parentElement.remove();
    }

}