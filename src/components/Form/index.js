import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ baseValue, onInputChange, onFormSubmit }) => (
  <form className="form" onSubmit={onFormSubmit}>
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      value={baseValue}
      onChange={(event) => onInputChange(event.target.value)}
      onSubmit={(event) => onFormSubmit(event.preventDefault())}
    />
  </form>
);

Form.propTypes = {
  baseValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
