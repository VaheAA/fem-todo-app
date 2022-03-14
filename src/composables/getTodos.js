export const getTodos = (list, active, filter) => {
  list.value = JSON.parse(localStorage.getItem('todos'));
  active.value = 'all';
  filter.value = 'all';
};
