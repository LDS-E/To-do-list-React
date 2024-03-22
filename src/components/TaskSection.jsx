import TaskItem from './TaskItem';
import AddNewTask from './AddNewTask';

const TaskSection = ({ tasks, setTasks }) => {
  return (
    <>
      {/* Instead of having an additional state and render one component or another, we take a different approach. TaskItem will render in one of 2 ways, depending on whether that task item is being edited or not */}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))}
      </ul>
      {/* Former approach */}
      {/* {tasks.map((task) => (
        // Keys should not repeat in the entire document. Imagine you have 2 arrays of different data to loop over, and you use index for both. You'll have duplicate keys in your document, and React will have trouble identifying these elements!
        // Since we have a more unique identifier now with the tasks's id, that is more reliable as a key value
        <React.Fragment key={task.id}>
          {editIndex === task.id ? (
            <EditTaskContainer
              initialName={task.name}
              onSave={(newName) => saveEditedTask(task.id, newName)}
              onCancel={cancelEditTask}
            />
          ) : (
            <TaskItem
              task={task}
              setTasks={setTasks}
              onStartEditTask={startEditTask}
            />
          )}
        </React.Fragment>
      ))} */}
      <div className='todo-add-item__container'>
        <AddNewTask setTasks={setTasks} />
      </div>
    </>
  );
};

export default TaskSection;