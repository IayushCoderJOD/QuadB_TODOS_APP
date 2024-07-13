import { useState } from "react";
import { FaCheck, FaEdit, FaSave, FaTimes, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
    editTodo,
    markCompleted,
    markIncomplete,
    removeTodo,
} from "../redux/actions";

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editTodo(index, newText));
        setIsEditing(false);
    };

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="mr-4 text-gray-500">{index + 1}.</span>
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="mr-4 border rounded p-1"
                    />
                ) : (
                    <span
                        className={`mr-4 ${todo.completed ? "line-through text-gray-500" : ""
                            }`}
                    >
                        {todo.text}
                    </span>
                )}
            </div>
            <div className="space-x-3 ml-8">
                <button
                    className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
                    onClick={() => dispatch(removeTodo(index))}
                >
                    <FaTrash />
                </button>
                {!todo.completed && (
                    <button
                        className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
                        onClick={() => dispatch(markCompleted(index))}
                    >
                        <FaCheck />
                    </button>
                )}
                {todo.completed && (
                    <button
                        className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
                        onClick={() => dispatch(markIncomplete(index))}
                    >
                        <FaTimes />
                    </button>
                )}
                {isEditing ? (
                    <button
                        className="text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
                        onClick={handleSave}
                    >
                        <FaSave />
                    </button>
                ) : (
                    <button
                        className="text-sm bg-gray-500 text-white sm:px-2 px-1 py-1 rounded"
                        onClick={handleEdit}
                    >
                        <FaEdit />
                    </button>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
