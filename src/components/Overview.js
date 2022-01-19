import React from 'react';

const Overview = ({ tasks }) => {
  const tasksList = tasks.map(({ id, title }) => {
    return <li key={id}>{title}</li>;
  });

  return <ul>{tasksList}</ul>;
};

export default Overview;
