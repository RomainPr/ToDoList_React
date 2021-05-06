import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  id, label, status, changeStatus,
}) => (
  <li>
    <label className="list-item list-item--done list-item">
      <input
        type="checkbox"
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
