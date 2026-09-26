const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");
function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    saveData();
}
addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTask();
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function loadData() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
loadData();