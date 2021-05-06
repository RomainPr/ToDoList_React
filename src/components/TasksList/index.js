import React from 'react';
import PropTypes from 'prop-types';

import Task from './task';

import './task.scss';

const Tasks = ({
  tasks, id, label, status, changeStatus,
}) => (
  <ul className="list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={id}
        label={label}
        done={status}
        changeStatus={() => changeStatus(task.done)}
      />
    ))}
  </ul>
);

Tasks.propTypes = PropTypes.func.isRequired;

export default Tasks;
