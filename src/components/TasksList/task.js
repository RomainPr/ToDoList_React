/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Trash2 as TrashIcon, Edit2 as ModifyIcon } from 'react-feather';

const Task = ({
  id,
  label,
  done,
  onCheckboxClick,
  onDeleteTask,
  taskIdToEdit,
  onEditButtonClick,
  onEditTask,
  onInputBlur,
}) => (
  <li>
    <label className={classNames('list-item', { 'list-item--done': done })}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onCheckboxClick(id)}
      />
      {
        // Si l'id de la tache correspond a la tache en cours d'édition
        // alors j'affiche l'input pour éditer la tache
        // sinon, j'affiche simplement son nom
        taskIdToEdit === id ? (
          <input
            className="list-item-input"
            type="text"
            value={label}
            // onBlur : appelée lorsque on sort d'un input
            onBlur={() => onInputBlur()}
            onChange={(event) => onEditTask(id, event.target.value)}
          />
        ) : (
          label
        )
      }
      <div>
        <button
          onClick={() => onEditButtonClick(id)}
          className="list-item-edit"
          type="button"
        >
          <ModifyIcon />
        </button>
        <button
          onClick={() => onDeleteTask(id)}
          className="list-item-delete"
          type="button"
        >
          <TrashIcon />
        </button>
      </div>
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  taskIdToEdit: PropTypes.number.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func.isRequired,
};

export default Task;
