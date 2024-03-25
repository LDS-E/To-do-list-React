import { useState } from 'react';
import checkIcon from '../assets/checkIcon.svg';
import editIcon from '../assets/editIcon.svg';
import trashIcon from '../assets/trash.svg';
import EditTaskContainer from './EditTaskContainer';

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveEditedTask = (id /* id instead of index */, newName) => {
    if (!newName.trim() === '') return setIsEditing(false);

    // We repeat the same principle above for changing a tasks completed property, but the name instead
    // const updatedTasks = [...tasks];
    // updatedTasks[index].name = newName;
    // setTasks(updatedTasks);

    setTasks((currTasks) =>
      currTasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );

    setIsEditing(false);
  };

  // Referring to a task by index can be troublesome, since arrays can mutate quite easily
  // I'd opt for having an id property in each todo so that you have a stable way to
  // identify it
  const deleteTask = (id /* id instead of index */) => {
    // const updatedTasks = [...tasks];
    // updatedTasks.splice(index, 1);
    // setTasks(updatedTasks);

    // with .filter(), we can have a new array that contains
    // all but the item with the id that was given to this function
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id /* id instead of index */) => {
    // const updatedTasks = [...tasks];
    // updatedTasks[index].completed = !updatedTasks[index].completed;
    // setTasks(updatedTasks);

    // With the map method, we can create a new array with one item different from the original array
    setTasks((currTasks) =>
      currTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    // The above code, broken down:
    // setTasks((currTasks) => {
    // The new value of the state will be the outcome of the .map() method, a new array based on the current state
    // return currTasks.map((task) => {
    // We have a ternary. Here, we check if the id of every task that is present in the array is equal to the id given to toggleTaskCompletion as an argument. If it isn't, we return the task as it is, unchanged. If it is, we return a new object with a copy of the task, and a flipped completed property
    // return task.id === id ? { ...task, completed: !task.completed } : task;
    // });
    // });
  };

  return isEditing ? (
    <EditTaskContainer
      initialName={task.name}
      onSave={(newName) => saveEditedTask(task.id, newName)}
      onCancel={() => setIsEditing(false)}
    />
  ) : (
    <li className='grid grid-cols-[0.2fr,4fr,0.25fr,0.25fr] gap-x-2 p-1 hover:bg-neutral-700 rounded-lg'>
      <button
        className='button-check'
        onClick={() => toggleTaskCompletion(task.id)}
      >
        <div className='w-6 h-6 bg-neutral-500  shadow-emerald-50 rounded-lg'>
        <img
          src={checkIcon}
          alt=''
          className={`px-0.5 aspect-square ${task.completed && 'hidden'}`}
        />
        </div>
      </button>
      {/* The handler was a wrapper for the same functionality in the pen icon. I'd say its simple enough to have it inline */}
      <p className='text-white' onDoubleClick={() => setIsEditing(true)}>
        {task.name}
      </p>
      {/* 
        1. The <i> icons are a bit buggy here. I opted for a different approach with Heroicons (from the creators of Tailwind). I created svg files, imported them and used them as the src of images.
        2. All tasks have an unique identifier with the id property,
        which makes it much easier for us to ensure we are targeting the right object
      */}
      <img
        src={editIcon}
        alt=''
        className='w-6 aspect-square'
        onClick={() => setIsEditing(true)}
      />
      <img
        src={trashIcon}
        alt=''
        className='w-6 aspect-square'
        onClick={() => deleteTask(task.id)}
      />
    </li>
  );
};

export default TaskItem;