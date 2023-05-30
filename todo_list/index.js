const todoInput=document.querySelector(".todo-input");
let todoButon=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo_list");

todoButon.addEventListener("click",addTodo);
todoList.addEventListener("click",supprimer);
function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //bouton check
    const completeButon=document.createElement("button");
    completeButon.innerHTML='<i class="fa-solid fa-square-check"></i>';
    completeButon.classList.add("complete-btn");
    todoDiv.appendChild(completeButon);
    //bouton delate
    const suprimerButon=document.createElement("button");
    suprimerButon.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    suprimerButon.classList.add("supprime-btn");
    todoDiv.appendChild(suprimerButon);

    ///dqvdqvdqvd
    todoList.appendChild(todoDiv);
    todoButon.addEventListener("click",addTodo);
    todoInput.value="";
};

function supprimer(e){
    const item = e.target;
    if(item.classList[0]==="supprime-btn"){
        const todo=item.parentElement;
        todo.remove();
    }
}   todoInput.value="";

