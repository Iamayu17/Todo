console.log("JS loaded");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedList = document.getElementById("completed-list");
const completedHeading = document.getElementById("completed-heading");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10008";
    li.appendChild(span); 
  }
  inputBox.value = "";
  saveData()
}
document.addEventListener("click", function(e) {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            completedList.appendChild(e.target);
        }else{
            listContainer.appendChild(e.target)
        }
        updateCompletedHeading();
        saveData()
        //classList used 
    }
    else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove("span"); 
         saveData()
         //parentElement used
    }
    }, false);
 // Code for regex check 
    function removespecial(event){
        const regex = /^[a-zA-Z0-9\s-()]*$/;
        const input = event.key;
        if(!regex.test(input)){
            event.preventDefault();
        }
    }
    
//local storage functions
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
        localStorage.setItem("completedList", completedList.innerHTML);
    }
    function loadData(){
        if (localStorage.getItem("data")) {
            listContainer.innerHTML = localStorage.getItem("data");
        }
        if (localStorage.getItem("completedList")) {
            completedList.innerHTML = localStorage.getItem("completedList");
            updateCompletedHeading();
        }
    }

    function updateCompletedHeading() {
        if (completedList.children.length > 0) {
            completedHeading.style.display = "block";
        } else {
            completedHeading.style.display = "none";
        }
    }
 
    loadData();

   



