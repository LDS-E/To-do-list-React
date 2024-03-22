import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import EditTaskContainer from './EditTaskContainer';
import TaskSection from './TaskSection';

const MainSection = () => {
  // Instead of a function, we short circuit the initial value of state
  // as either the parsed JSON in localStorage or a generic fallback
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [
      {
        id: crypto.randomUUID(),
        name: 'task 1',
        createdAt: Date.now(),
        completed: true,
      },
      {
        id: crypto.randomUUID(),
        name: 'task 2',
        createdAt: Date.now(),
        completed: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className='w-screen'>
      <section className='bg-indigo-600 w-3/5 m-auto'>
        <div>
          <div className='p-4 rounded-lg my-4' style={{ width: '100%' }}>
            <div className='flex justify-center my-4 text-lg'>
              <p className='text-2xl font-bold py-4 text-amber-400'>
                This is our to-do list for this week.
              </p>
            </div>
            <div className='flex justify-center my-8'>
              <p
                id='date'
                className='bg-white px-8 py-4 font-extrabold rounded-3xl text-xl shadow'
              >
                Loading date...
              </p>
            </div>
            <div
              id='week-days'
              className='flex justify-equal justify-center mb-3 w-full'
            >
              {}
            </div>
          </div>
          <div className='todo-list__container'>
            <TaskSection tasks={tasks} setTasks={setTasks} />
            {/* <ul id='todo-list'>{renderTasks()}</ul> */}
          </div>
          {/* <div>
            <button id='add-item2' className='add-button-text'>
              {' '}
              + Add task
            </button>
          </div> */}
        </div>
        <div className='todo-list__app'></div>
      </section>
    </main>
  );
};

export default MainSection;