/* eslint-disable no-console */
// == Import npm
import React from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/TasksList';

import './app.scss';

// import de mes données
import TasksData from 'src/data/tasks';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseValue: '',
      tasks: TasksData,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleUpdateCount = this.handleUpdateCount.bind(this);
  }

  handleChange(baseValue) {
    this.setState({
      // équivalent de
      // inputText: inputText
      // comme on a nommé le parametre (inputText) de la même façon
      // que la clé inputText de notre state, on peut utiliser
      // cette syntaxe raccourcie : shorthand property
      baseValue,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(event) {
    const { baseValue, tasks } = this.state;

    // on récupère un tableau des ids des tâches
    const ids = tasks.map((task) => task.id);
    // je déverse ces ids dans Math.max
    const maxId = Math.max(...ids);

    event.preventDefault();

    // je vais créer une tâche lorsque l'utilisateur appuie
    // sur la touche entrée
    const newTask = {
      id: maxId + 1,
      label: baseValue,
      done: false,
    };

    // je déclare un nouveau tableau de taches
    const newTasks = [
      // je recopie les anciennes taches à la main
      ...tasks,
      // et j'ajoute ma nouvelle tâche, que je viens de créer
      newTask,
    ];

    this.setState({
      tasks: newTasks,
      baseValue: '',
    });
  }

  handleUpdateCount() {}

  handleChangeStatus() {}

  render() {
    const { baseValue, tasks } = this.state;
    // je filtre le tableau de taches pour garder que le taches "pas finies"
    // puis je regarde la longueur du tout
    const onGoingTasks = tasks.filter((task) => !task.done).length;
    // on recopie le tableau de taches
    // afin que le tri n'impacte pas notre state
    const sortedTasks = [...tasks];
    // ce qu'il faut savoir avec les opérations avec les booléens
    // true - false === 1
    // false - true === -1
    // true - true === 0
    sortedTasks.sort((a, b) => a.done - b.done);

    return (
      <div className="app">
        <Form
          baseValue={baseValue}
          onInputChange={this.handleChange}
          onFormSubmit={this.handleSubmit}
        />
        <Counter
          taskNumber={onGoingTasks}
        />
        <Tasks
          tasks={sortedTasks}
          id={this.state.id}
          label={this.state.label}
          status={this.state.status}
          changeStatus={this.handleChangeStatus}
        />
      </div>
    );
  }
}

// == Export
export default App;
