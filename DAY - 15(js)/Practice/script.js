let task;
function addTask() {
    task = document.createElement("p");
    task.textContent = "New Task";
    document.getElementById("container").appendChild(task);
}
//function removeTask(){
//    if(task){
//        document.getElementById("container").removeChild(task)
//        task=null;
//    }
//}

function removeTask() {
    let task = document.querySelectorAll("p");
    let n = task.length;
    document.getElementById("container").removeChild(task[n - 1]);

}

let inputval=document.getElementById("myinput").value;
alert(inputval);
document.getElementById("myinput").value="Changed";

document.getElementById("demo").classList.add("Highlight");
document.getElementById("demo").classList.remove("blue");
document.getElementById("demo").classList.toggle("activate");
