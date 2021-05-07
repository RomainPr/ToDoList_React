import React from 'react';
import PropTypes from 'prop-types';

import Task from './task';

import './task.scss';

const Tasks = ({
  tasks,
  onCheckboxClick,
  onDeleteTask,
  onEditTask,
  onEditButtonClick,
  taskIdToEdit,
  onInputBlur,
}) => (
  <ul className="list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        label={task.label}
        done={task.done}
        onCheckboxClick={() => onCheckboxClick(task.id)}
        onDeleteTask={() => onDeleteTask(task.id)}
        onEditButtonClick={() => onEditButtonClick(task.id)}
        taskIdToEdit={taskIdToEdit}
        onEditTask={() => onEditTask(task.id)}
        onInputBlur={() => onInputBlur()}
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
  onDeleteTask: PropTypes.func.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  taskIdToEdit: PropTypes.number.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func.isRequired,
};

export default Tasks;
