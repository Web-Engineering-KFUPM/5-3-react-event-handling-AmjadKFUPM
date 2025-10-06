import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 ? 
        (<li className="item">No tasks yet.</li>)
      : 
        (tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} text={task.text} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
}