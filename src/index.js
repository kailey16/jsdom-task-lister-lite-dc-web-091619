document.addEventListener("DOMContentLoaded", () => {
  // your code here

let form = findForm();
form.addEventListener("submit", addListElement);

});

function findForm(){
  return document.getElementById("create-task-form");
}

function grabInputs(){
  var input = document.getElementById("new-task-description").value;
  var user = document.getElementById("new-user-description").value;
  var duration = document.getElementById("new-duration-description").value;
  var dueDate = document.getElementById("new-dueDate-description").value; 

  return `${input}, ${user}, ${duration}, ${dueDate}`;;
}

function priorityColors(element){
  var priority = document.getElementById("task-priority").value;
  console.log(priority);
  if(priority === "High"){
    element.style = "color:red;";
  }else if(priority === "Medium"){
    element.style = "color:orange;"
  }else if(priority === "Low"){
    element.style = "color:blue;"
  }

}

function addListElement(event){
  event.preventDefault();
  let liElement = document.createElement("li");
  let ulElement = document.getElementById("tasks");
  ulElement.appendChild(liElement);
  
  liElement.innerText = grabInputs();
  
  priorityColors(liElement);

  liElement.addEventListener("click", deleteMe)
  liElement.addEventListener("contextmenu", editMe)
  findForm().reset();
}

function deleteMe(event){

  event.target.remove()
  console.log("Clicked");
}

function editMe(){
  event.target.innerText = grabInputs();
  priorityColors(event.target);
  findForm().reset();
}