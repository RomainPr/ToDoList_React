import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ numberOfTasks, onUpdateTaskList }) => (
  <p className="counter">{numberOfTasks} tâches en cours</p>
);

Counter.propTypes = PropTypes.string.isRequired;

export default Counter;
