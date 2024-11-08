document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("todo_input");
    const listContainer = document.getElementById("todo-list");

    console.log(inputBox);
    console.log(listContainer);

    function AddTask() {
        const inputBox = document.getElementById("todo_input");
        const listContainer = document.getElementById("todo-list");
        console.log('WHY!');
        if (inputBox.value === '') {
            alert('you must write something to resolve this error');
        } else {
            console.log("entry detected");
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            console.log(listContainer);
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "X";
            li.appendChild(span);
            inputBox.value = '';
        }
        inputBox.value = '';
    }

    listContainer.addEventListener("click", function(e) {
        console.log("click registered");
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    }, false);
});