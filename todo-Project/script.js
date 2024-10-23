
const todoCreateButton = document.querySelector(".todo__create__button");
const todoInput = document.querySelector(".todo__input");
const todoContainer = document.querySelector(".todo__container");

const todoValues = [];
let todoElements = [];

todoCreateButton.addEventListener("click", () => {
  const value = todoInput.value;
  if (value === "") {
    return;
  }
  todoValues.push(value);
  console.log(todoValues);
  todoInput.value = "";

  updateTodo();
});

  function updateTodo() {
    todoElements = todoValues.map((val, index) => {
      return `
        <div class="todo__item">
          <div class="todo__item__left">
            <input type="checkbox" id="completed" name="completed" />
            <span class = "todo_text">${val}</span>
          </div>
          <div class="todo__item__right">
            <svg
              class="todo__delete__button"
              todo-index="${index}"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </div>
        </div>`;
    });
  
    todoContainer.innerHTML = todoElements.join(" ");

    const deleteButtons = document.querySelectorAll(".todo__delete__button");
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = e.target.getAttribute("todo-index");
        todoValues.splice(index, 1);
        updateTodo();
      });
    });

    const completeTick = document.querySelectorAll("#completed");
    completeTick.forEach((checkbox, index) => {
      checkbox.addEventListener('click', (e) => {
        const todoText = e.target.parentElement.querySelector(".todo_text");
        todoText.classList.toggle("completed");
      });
    });

}

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.map((val) => {
//   return val * 2;
// });
// console.log(evenNumbers);

// console.log(todoCreateButton);
// const add = (a, b) => {
//   console.log(a + b);
// };
// add(1, 2);
