import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      country: '',
      gender: 'male',
    };
  }
  
  handleInputValue = event => {
    const field = event.target.name;
    this.state[field] = event.target.value;
    this.setState({
      [field]: this.state[field]
    });
  }
  
  render() {
    const {
        name,
        email,
        country,
        gender,
    } = this.state;

    return (
      <div className="Form">
        <header className="Form-header">
          <h1 className="Form-title">Day1 Task</h1>
        </header>
        <form>
          <label>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleInputValue } 
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleInputValue }
            />
          </label>
          <label>
            <span>Country:</span>
            <select
              name="country"
              value={ country }
              onChange={ this.handleInputValue }
            >
              <option value="Japan">Japan</option>
              <option value="nihon">Nihon</option>
              <option value="Nippon">Nippon</option>
            </select>
          </label>
          <label>
            <span>Gender:</span>
            <div>
              <p>Male</p>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={ gender === "male" }
                onChange={ this.handleInputValue }
              />
            </div>
            <div>
              <p>Female</p>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={ gender === "female" }
                onChange={ this.handleInputValue }
              />
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
