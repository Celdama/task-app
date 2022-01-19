import React from 'react';

const Overview = ({ tasks }) => {
  const tasksList = tasks.map(({ id, title, taskNumber }) => {
    return (
      <li key={id}>
        task {taskNumber} : {title}
      </li>
    );
  });

  return <ul>{tasksList}</ul>;
};

export default Overview;
