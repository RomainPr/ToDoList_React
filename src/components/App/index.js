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
      taskBeeingEdited: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxClic = this.handleCheckboxClic.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleMakeTaskEditable = this.handleMakeTaskEditable.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputBlur() {
    this.setState({
      taskBeeingEdited: -1,
    });
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

    // preventDefault : je bloque le comportement par défaut
    // du submit
    // afin que ma page ne soit pas rechargée
    event.preventDefault();

    // si rien n'a été saisi dans le champ
    // on arrête tout et on sort de la fonction
    if (baseValue === '') {
      return;
    }

    // on récupère un tableau des ids des tâches
    const ids = tasks.map((task) => task.id);
    // je déverse ces ids dans Math.max
    // note : je n'apelle Math.max, que si j'ai des ids
    // si j'ai rien, mon id max est 0
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

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

  handleCheckboxClic(taskId) {
    // on doit renvoyer un nouveau tableau
    // on ne doit pas modifier l'ancien
    // on sait aussi, que le tableau à copier puis modifier, c'est this.state.tasks
    // on sait aussi, que l'on doit modifier la case dont l'id correspond à "taskId"
    // on sait enfin, que, si done = true, alors on met done = false, et vice versa
    // en gros, on va inverser la valeur de done

    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({
      tasks: newTasks,
    });
  }

  handleTaskDelete(taskId) {
    const { tasks } = this.state;

    // objectif : supprimer dans le state la tache dont l'id === taskId

    // dans un premier temps, je vais fabriquer un nouveau tableau
    // qui contient tous les éléments, sauf celui que je souhaite supprimer

    const newTasks = tasks.filter((task) => task.id !== taskId);

    this.setState({
      tasks: newTasks,
    });
  }

  handleMakeTaskEditable(taskId) {
    this.setState({
      taskBeeingEdited: taskId,
    });
  }

  handleEditTask(taskId, newValue) {
    // je vais modifier le label de la tache qui a pour id "taskId"
    // et dedans, je vais mettre "newValue"

    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === taskId) { // si c'est la tache que je veux changer
        return {
          // je recopie la tache
          ...task,
          // et je change son label
          label: newValue,
        };
      }
      // sinon, je retourne la tache telle quelle
      return task;
    });

    // on envoie setstate pour modifier les taches dans mon state
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { baseValue, tasks, taskBeeingEdited } = this.state;
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
          taskIdToEdit={taskBeeingEdited}
          tasks={sortedTasks}
          onCheckboxClick={this.handleCheckboxClic}
          onDeleteTask={this.handleTaskDelete}
          onEditButtonClick={this.handleMakeTaskEditable}
          onEditTask={this.handleEditTask}
          onInputBlur={this.handleInputBlur}
        />
      </div>
    );
  }
}

// == Export
export default App;
