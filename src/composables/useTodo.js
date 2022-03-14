import { ref } from 'vue';

export const useTodo = () => {
  const submitTodo = (list, newTodo) => {
    if (localStorage.getItem('todos')) {
      list.value = [...list.value, newTodo];
      localStorage.setItem('todos', JSON.stringify(list.value));
    } else {
      localStorage.setItem('todos', JSON.stringify([newTodo]));
    }
    list.value = JSON.parse(localStorage.getItem('todos'));
  };

  const deleteTodo = (list, id) => {
    list.value = list.value.filter((item) => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(list.value));
  };

  const completeTodo = (list, id) => {
    list.value.map((item) =>
      item.id === id ? (item.completed = !item.completed) : item.completed
    );
    localStorage.setItem('todos', JSON.stringify(list.value));
  };

  const deleteCompleted = (list) => {
    list.value = list.value.filter((todo) => todo.completed === false);
    localStorage.setItem('todos', JSON.stringify(list.value));
  };

  const updateTodos = (list) => {
    if (
      list.value &&
      list.value.length !== JSON.parse(localStorage.getItem('todos')).length
    ) {
      list.value = JSON.parse(localStorage.getItem('todos'));
    }
  };

  return { deleteTodo, submitTodo, completeTodo, deleteCompleted, updateTodos };
};
