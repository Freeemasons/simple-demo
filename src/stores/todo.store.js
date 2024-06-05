import { makeAutoObservable } from "mobx";


class TodoStore {

  state = {
    todos: [{
      id: 1,
      title: 'Мероприятие 1',
      date: '2024-06-20',
      completed: false,
    },
      {
        id: 2,
        title: 'Мероприятие 2',
        date: '2024-06-25',
        completed: false,
      }
    ],
  };

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo, date) {

    this.state.todos = [...this.state.todos, {
      id: Date.now(),
      title: todo,
      completed: false,
      date: date,
    }]

  }

  get count() {

    return this.state.todos.length;
  }

  get completedTodos() {

    return this.state.todos.filter((todo) => todo.completed);
  }

  get completedCount() {
    return this.completedTodos?.length;
  }

  get incompletedCount() {
    return this.count - this.completedCount;
  }

  toggleComplete(id) {

    this.state.todos = this.state.todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      };
    });
  }

  remove(id) {

    this.state.todos = this.state.todos.filter((todo) => todo.id !== id);
  }

  get todos() {

    return this.state.todos.slice(0).sort((a, b) => {
      const dateA = a.date;
      const dateB = b.date;

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    })
  }

}

export default TodoStore;
