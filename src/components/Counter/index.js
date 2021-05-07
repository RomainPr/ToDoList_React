import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ taskNumber }) => (
  <p className="counter">{taskNumber} tâches en cours</p>
);

Counter.propTypes = {
  taskNumber: PropTypes.number.isRequired,
};

export default Counter;
