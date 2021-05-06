import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ baseValue, onChangeValue }) => (
  <form className="form" onSubmit={(event) => event.preventDefault()}>
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      value={baseValue}
      onChange={(event) => onChangeValue(event.target.value)}
    />
  </form>
);

Form.propTypes = {
  baseValue: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default Form;
