const todoInput=document.querySelector(".todo-input");
let todoButon=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo_list");

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo= document.createElement("li");
    newTodo.innerText="Bonjour";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //bouton check
    const completeButon=document.createElement("button");
    completeButon.innerHTML='<i class="fa-solid fa-square-check"></i>';
    completeButon.classList.add("complete-btn");
    todoDiv.appendChild(completeButon);
    //bouton delate
    const suprimerButon=document.createElement("button");
    suprimerButon.innerHTML='<i class="fa-solid fa-trash-xmark"></i>';
    suprimerButon.classList.add("supprime-btn");
    todoDiv.appendChild(suprimerButon);

    ///dqvdqvdqvd
    todoList.appendChild(todoDiv);
    todoButon.addEventListener("click",addTodo);
};


todoButon.addEventListener("click",addTodo);