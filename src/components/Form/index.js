import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);

    // on commence pas créer la référence, dans le constructeur
    this.taskInput = React.createRef();
  }

  componentDidMount() {
    // la ref est accessible après le rendu
    // c'est une référence (et oui) vers l'élément du DOM réel
    // la référence sera automatiquement mise à jour par React
    // lors de chaque nouveau rendu.
    this.taskInput.current.focus();
  }

  render() {
    const { baseValue, onInputChange, onFormSubmit } = this.props;

    return (
      <form className="form" onSubmit={onFormSubmit}>
        <input
        // la ref sera remplie lors du render
          ref={this.taskInput}
          type="text"
          className="form-item"
          placeholder="Ajouter une tâche"
          value={baseValue}
          onChange={(event) => onInputChange(event.target.value)}
          onSubmit={(event) => onFormSubmit(event.preventDefault())}
        />
      </form>
    );
  }
}

Form.propTypes = {
  baseValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
