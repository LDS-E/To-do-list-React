import { useState } from 'react';

const AddNewTask = ({ setTasks }) => {
  const [taskName, setTaskName] = useState('');

  // Logic of two functions was condensed into one. The addTask is now the event
  // listener for the form submit, and also handles mutating the tasks state
  const addTask = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    // Every new task must also be uniquely identifiable via an id
    // to make sure we can tell them apart by a reliable value
    // Arrays grow and shrink as we interact with them, so the index is not a
    // consistent value and relying on it quickly leads to bugs
    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      createdAt: Date.now(),
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTaskName('');
  };

  return (
    <form onSubmit={addTask}>
      <input
        className='inputItem rounded-lg bg-slate-300 p-2'
        name='taskName'
        type='text'
        placeholder='New Item'
        // we have a state to keep track of the content of the input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className='px-4 py-2 mx-4 bg-amber-500 hover:bg-amber-600 rounded-lg  shadow-emerald-50 ' type='submit'>Add</button>
    </form>
  );
};

export default AddNewTask;