import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({
  id, label, status, changeStatus,
}) => (
  <li>
    <label className={classNames('list-item', { 'list-item--done': status })}>
      <input
        type="checkbox"
        checked={status}
        onClick={() => changeStatus(status)}
      />
      {label}
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default Task;
