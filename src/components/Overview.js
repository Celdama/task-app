import React from 'react';

const Overview = ({ tasks, handleDeleteTask }) => {
  const tasksList = tasks.map(({ id, title }, index) => {
    return (
      <li key={id}>
        task {index + 1} : {title}
        <button onClick={() => handleDeleteTask(id)}>x</button>
      </li>
    );
  });

  return <ul>{tasksList}</ul>;
};

export default Overview;
