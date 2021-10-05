import './App.css';
import React from 'react';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listA: [0, 1, 2, 3, 4],
    };
  }

  addToList = (e) => {
    e.preventDefault();
    console.log('adding now');
    let numToAdd = '';
    if (this.state.listA.length === 0) {
      numToAdd = 0;
    } else {
      numToAdd = this.state.listA[this.state.listA.length - 1] + 1;
    }

    this.setState((prevState) => ({ listA: [...prevState.listA, numToAdd] }));
  };

  deleteLastFromList = (e) => {
    e.preventDefault();
    console.log('deleting now');
    const newItemsInArray = this.state.listA.slice(
      0,
      this.state.listA.length - 1
    );
    this.setState((prevState) => ({ listA: [...newItemsInArray] }));
  };

  render() {
    const listOfThings = this.state.listA.map((item) => (
      <div key={uniqid()}>{item}</div>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1>MBeckDev's Smallest React Project</h1>
          <div>Add and Delete from this.state</div>
          <div>no props or components</div>
        </header>
        <main>
          <div className="main-sections-container">
            <div className="add-section" onClick={this.addToList}>
              <button>Add to list</button>
            </div>

            <div className="delete-section" onClick={this.deleteLastFromList}>
              <button>Delete from list</button>
            </div>

            <div className="show-section">
              <div>Current state shown here</div>
              <div>The list is here:</div>

              {listOfThings}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
