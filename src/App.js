import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Overview from './components/Overview';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [edit, setEdit] = useState(false);

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
        editing: false,
      },
    ]);

    setTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const handleEditTask = (id) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        return task.id === id
          ? { ...task, editing: !task.editing }
          : { ...task, editing: false };
      });
    });
  };

  const handleSubmitEditTask = (id, updatedTask) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        return task.id === id
          ? { ...task, title: updatedTask, editing: !task.editing }
          : task;
      });
    });
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
        <Overview
          tasks={tasks}
          edit={edit}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
          handleSubmitEditTask={handleSubmitEditTask}
        />
      </div>
    </div>
  );
}

export default App;
