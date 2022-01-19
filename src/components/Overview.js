import React, { useState } from 'react';

const Overview = ({
  tasks,
  handleDeleteTask,
  handleEditTask,
  handleSubmitEditTask,
}) => {
  const [updatedTask, setTaskUpdated] = useState('');

  const handleChange = (e) => {
    setTaskUpdated(e.target.value);
  };

  const tasksList = tasks.map(({ id, title, editing }, index) => {
    return (
      <li key={id}>
        {!editing ? (
          <span>
            task {index + 1} : {title}
          </span>
        ) : (
          <input
            type='text'
            onChange={handleChange}
            placeholder={title}
            name=''
            id=''
          />
        )}
        <button onClick={() => handleDeleteTask(id)}>x</button>
        {!editing ? (
          <button onClick={() => handleEditTask(id)}>edit</button>
        ) : (
          <button onClick={() => handleSubmitEditTask(id, updatedTask)}>
            resubmit
          </button>
        )}
      </li>
    );
  });

  return <ul>{tasksList}</ul>;
};

export default Overview;
