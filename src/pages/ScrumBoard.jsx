import React from "react";
import { useTasks } from "../hooks/firebase/useTasks";
import AddToDo from "../components/AddToDo";
import Board from "../components/Board";

export default function ScrumBoard() {
    const { tasks, addTask } = useTasks();
    return (
        <div>
            <h1>Scrum Board</h1>
            <AddToDo addTask={addTask} />
            <Board tasks={tasks} />
        </div>
    );
}