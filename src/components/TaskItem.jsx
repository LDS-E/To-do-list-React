

const TaskItem = ({ task, index, onToggleTaskCompletion, onStartEditTask, onDeleteTask }) => {
  const handleDoubleClick = () => {
    onStartEditTask(index);
  };

  return (
    <li key={index} className="flex justify-center todo-item">
      <button className="button-check" onClick={() => onToggleTaskCompletion(index)}>
        <i className={`fas fa-check ${task.completed ? "" : "displayNone"}`}></i>
      </button>
      <p className="task-name" onDoubleClick={handleDoubleClick}>
        {task.name}
      </p>
      <i className="fas fa-edit" onClick={() => onStartEditTask(index)}></i>
      <i className="fas fa-trash-alt" onClick={() => onDeleteTask(index)}></i>
    </li>
  );
};

export default TaskItem;
