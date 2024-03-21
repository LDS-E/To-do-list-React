import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import EditTaskContainer from './EditTaskContainer';


const MainSection = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || [
      { name: 'task 1', createdAt: Date.now(), completed: true },
      { name: 'task 2', createdAt: Date.now(), completed: false }
    ];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() === '') {
      // Não adiciona tarefa em branco
      return;
    }
    const newTask = { name: taskName, createdAt: Date.now(), completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
  };

  const saveEditedTask = (index, newName) => {
    if (newName.trim() === '') {
      // Não salva tarefa em branco
      cancelEditTask();
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[index].name = newName;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const cancelEditTask = () => {
    setEditIndex(null);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => (
      <React.Fragment key={index}>
        {editIndex === index ? (
          <EditTaskContainer
            initialName={task.name}
            onSave={(newName) => saveEditedTask(index, newName)}
            onCancel={cancelEditTask}
          />
        ) : (
          <TaskItem
            task={task}
            index={index}
            onToggleTaskCompletion={toggleTaskCompletion}
            onStartEditTask={startEditTask}
            onDeleteTask={deleteTask}
          />
        )}
      </React.Fragment>
    ));
  };

  return (
    <main className="w-screen">
      <section className="bg-indigo-600 w-3/5 m-auto">
        <div>
          <div className="p-4 rounded-lg my-4" style={{ width: "100%" }}>
            <div className="flex justify-center my-4 text-lg">
              <p className="text-2xl font-bold py-4 text-amber-400">This is our to-do list for this week.</p>
            </div>
            <div className="flex justify-center my-8">
              <p id="date" className="bg-white px-8 py-4 font-extrabold rounded-3xl text-xl shadow">Loading date...</p>
            </div>
            <div id="week-days" className="flex justify-equal justify-center mb-3 w-full">
              {/* Week days will be populated here by JavaScript */}
            </div>
          </div>
          <div className="todo-list__container">
            <ul id="todo-list">
              {renderTasks()}
            </ul>
          </div>
          <div className="todo-add-item__container">
            <form onSubmit={(e) => {
              e.preventDefault();
              const taskName = e.target.elements.taskName.value;
              addTask(taskName);
              e.target.elements.taskName.value = "";
            }}>
              <input className="inputItem" name="taskName" type="text" placeholder="New Item" />
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <button id="add-item2" className="add-button-text"> + Add task</button>
          </div>
        </div>
        <div className="todo-list__app">
        </div>
      </section>
    </main>
  );
};

export default MainSection;
