import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Overview from './components/Overview';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        taskNumber: tasks.length + 1,
        title: task,
      },
    ]);

    setTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <div className='App'>
      <h1>task app</h1>
      <div>
        <form action='' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='title'
            placeholder='Enter task'
            value={task}
            type='text'
            id=''
          />
          <button>Add tasks</button>
        </form>
        <Overview tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
