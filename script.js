console.log("JS loaded");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData()
        //classList used 
    }
    else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove("span"); 
         saveData()
         //parentElement used
    }
    }, false);

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function  loadData(){
        listContainer.innerHTML = localStorage.getItem( "data" );
    }
    loadData();