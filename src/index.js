document.addEventListener("DOMContentLoaded", () => {
 
  let form = findForm();
  form.addEventListener("submit", addListElement);

});

////////// functions //////////

function findForm(){
  return document.getElementById("create-task-form");
}

function grabInputs(){
  const input = document.getElementById("new-task-description").value;
  const user = document.getElementById("new-user-description").value;
  const duration = document.getElementById("new-duration-description").value;
  const dueDate = document.getElementById("new-dueDate-description").value; 

  return `${input}, ${user}, ${duration}, ${dueDate}`;
}

function priorityColors(element){
  const priority = document.getElementById("task-priority").value;
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
  const liElement = document.createElement("li");
  const ulElement = document.getElementById("tasks");
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