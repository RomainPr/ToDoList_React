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
        id={task.id}
        label={task.label}
        status={task.done}
        changeStatus={() => changeStatus(task.done)}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Tasks;
