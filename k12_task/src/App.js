import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      allTotal: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const array = [2000, 1000, 500, 100, 50, 5, 2, 1];
    var value;
    var total = this.state.amount;
    let res = array.map(function (item, i) {
      value = total / item;
      total = total % item;
      return <li className="text-right "> <span className="text-success">{parseInt(value)} </span> of Rs <span className="text-danger">{item}</span></li>
    });
    this.setState({
      allTotal: res
    });

  }
  render() {

    return (
      <div>
        <h2 className="text-center heading">K12 ATM</h2>
        <div className="container my-app">
          <div className="row">
            <div className="col-md-6">
              <div className="user-block">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <h5>
                    Enter the Amount to represent in available Denomiations
                  </h5>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className="text-right form-control"
                    id="amount_input"
                    onChange={this.handleChange}
                    value={this.state.amount}
                  />
                  <br />
                  <button type="submit" value="submit" className="btn btn-block">
                    Submit
                </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 border-left">
              <div className="display-block">
                <h5>The available Denominations are</h5>
                <ul>
                  {
                    this.state.allTotal
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
