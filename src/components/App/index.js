/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
// == Import npm
import React from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/TasksList';

import './app.scss';

// import de mes données
import tasksList from 'src/data/tasks';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '1',
      label: 'Coder une todolist en impératif',
      status: true,
      baseValue: '',
      counter: '2',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleUpdateCount = this.handleUpdateCount.bind(this);
  }

  handleChange(event) {
    this.setState({
      baseValue: event,
    });
    console.log(event);
  }

  handleUpdateCount() {}

  handleChangeStatus(status) {
    this.setState({
      status: false,
    });
    console.log(status);
  }

  render() {
    return (
      <div className="app">
        <Form
          baseValue={this.state.baseValue}
          onChangeValue={this.handleChange}
        />
        <Counter
          numberOfTasks={this.state.counter}
          onUpdateTaskList={this.handleUpdateCount}
        />
        <Tasks
          tasks={tasksList}
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
