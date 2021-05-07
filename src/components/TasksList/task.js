/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({
  id, label, done, onCheckboxClick,
}) => (
  <li>
    <label className={classNames('list-item', { 'list-item--done': done })}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onCheckboxClick(id)}
      />
      {label}
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
};

export default Task;
