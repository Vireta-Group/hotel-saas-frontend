class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("neumorphic-todos")) || [];
    this.currentFilter = "all";
    this.init();
  }

  init() {
    this.bindEvents();
    this.render();
    this.updateStats();
  }

  bindEvents() {
    document
      .getElementById("addBtn")
      .addEventListener("click", () => this.addTodo());
    document.getElementById("todoInput").addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTodo();
    });
    document
      .getElementById("clearCompleted")
      .addEventListener("click", () => this.clearCompleted());

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.setFilter(e.target.dataset.filter)
      );
    });
  }

  addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();

    if (!text) return;

    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.todos.unshift(todo);
    input.value = "";
    this.saveTodos();
    this.render();
    this.updateStats();
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveTodos();
    this.render();
    this.updateStats();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
    this.render();
    this.updateStats();
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveTodos();
    this.render();
    this.updateStats();
  }

  setFilter(filter) {
    this.currentFilter = filter;
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
    this.render();
  }

  getFilteredTodos() {
    switch (this.currentFilter) {
      case "completed":
        return this.todos.filter((todo) => todo.completed);
      case "pending":
        return this.todos.filter((todo) => !todo.completed);
      default:
        return this.todos;
    }
  }

  render() {
    const todoList = document.getElementById("todoList");
    let emptyState = document.getElementById("emptyState");
    const filteredTodos = this.getFilteredTodos();

    if (filteredTodos.length === 0) {
      if (!emptyState) {
        emptyState = document.createElement("div");
        emptyState.id = "emptyState";
        emptyState.className = "empty-state";
        emptyState.innerHTML = `
                            <div class="empty-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 11l3 3 8-8"/>
                                    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9"/>
                                </svg>
                            </div>
                            <p>No tasks yet. Add one above!</p>
                        `;
      }
      todoList.innerHTML = "";
      todoList.appendChild(emptyState);
      return;
    }

    if (emptyState) {
      emptyState.remove();
    }

    todoList.innerHTML = "";
    filteredTodos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = `todo-item ${todo.completed ? "completed" : ""}`;
      todoItem.dataset.id = todo.id;

      todoItem.innerHTML = `
                        <label class="todo-checkbox">
                            <input type="checkbox" class="checkbox-input" ${
                              todo.completed ? "checked" : ""
                            }>
                            <span class="checkbox-custom"></span>
                        </label>
                        <span class="todo-text">${this.escapeHtml(
                          todo.text
                        )}</span>
                        <div class="todo-actions">
                            <button class="action-btn delete" title="Delete">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <path d="M10 11v6m4-6v6"/>
                                </svg>
                            </button>
                        </div>
                    `;

      // Add event listeners
      const checkbox = todoItem.querySelector(".checkbox-input");
      const deleteBtn = todoItem.querySelector(".delete");

      checkbox.addEventListener("change", () => this.toggleTodo(todo.id));
      deleteBtn.addEventListener("click", () => this.deleteTodo(todo.id));

      todoList.appendChild(todoItem);
    });
  }

  updateStats() {
    const total = this.todos.length;
    const completed = this.todos.filter((todo) => todo.completed).length;
    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;

    const clearBtn = document.getElementById("clearCompleted");
    clearBtn.style.display = completed > 0 ? "block" : "none";
  }

  saveTodos() {
    localStorage.setItem("neumorphic-todos", JSON.stringify(this.todos));
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

const todoApp = new TodoApp();
