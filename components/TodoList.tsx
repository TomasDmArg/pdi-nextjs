import TodoItem, { TodoItemProps } from './TodoItem';

const TodoList = ({ todos, toggleTodo }: TodoItemProps) => {
  return (
    <div>
      {todos && todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;