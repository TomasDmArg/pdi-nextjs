interface Todo {
    id: number;
    completed: boolean;
    text: string;
}

export interface TodoItemProps {
    todo?: Todo;
    todos?: Todo[];
    toggleTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
    const handleClick = () => {
        if(todo){
            toggleTodo(todo.id);
        }
    };

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                checked={todo?.completed}
                onChange={handleClick}
                className="mr-2"
            />
            <span
                className={todo?.completed ? "line-through" : ""}
            >
                {todo?.text}
            </span>
        </div>
    );
};

export default TodoItem;