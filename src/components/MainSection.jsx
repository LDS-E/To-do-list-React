import { useState, useEffect } from 'react';
import TaskSection from './TaskSection';
import Header from "./header";

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
      <Header />
      <section className='w-3/5 m-auto'>
        <div>
          <div className='todo-list__container'>
            <TaskSection tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
        <div className='todo-list__app'></div>
      </section>
    </main>
  );
};

export default MainSection;