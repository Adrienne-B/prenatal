const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEvent("click", function () {
        hamburger.classList.remove("active");

}));

const list = document.querySelector(".list");
const more = document.querySelector(".more");

const list = [
    "Walk dog",
    "Do laundry",
    "Call mom",
    "Finish paper",
    "Code a small project",
    "Read docs",
    "Grab food",
    "Go to the post office"
  ];

  const showTodos = function () {
    todos.forEach(function (list) {
      const li = document.createElement("li");
      li.innerHTML = list;
      todoList.append(li);
    });
    todoList.classList.remove("list");
    button.innerText = "Hide To-Dos";
  };
  
  button.addEventListener("click", function () {
    if (todoList.classList.contains("list")) {
      showTodos();
    } else {
      button.innerText = "Show me!";
      todoList.classList.add("hide");
      todoList.innerHTML = "";
    }
  });

var reviews = [
    "Eros in cursus turpis massa  dui ut ornare lectus. Ac auctor augue mauris gravida in fermentum.",
    "Eros in cursus turpis massa  dui ut ornare lectus. Ac auctor augue mauris gravida in fermentum.",
]