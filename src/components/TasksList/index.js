import React from 'react';
import PropTypes from 'prop-types';

import Task from './task';

import './task.scss';

const Tasks = ({
  tasks, onCheckboxClick,
}) => (
  <ul className="list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        label={task.label}
        done={task.done}
        onCheckboxClick={() => onCheckboxClick(task.id)}
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
  onCheckboxClick: PropTypes.func.isRequired,
};

export default Tasks;
