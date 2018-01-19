import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: {
        name: '',
        email: '',
        country: '',
        gender: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }
  
  handleChange(event) {
    console.log(event.target.name);
    switch (event.target.name) {
      case 'name':
        this.state.params.name = event.target.value;
        break;
      case 'email':
        this.state.params.email = event.target.value;
        break;
      case 'country':
        this.state.params.country = event.target.value;
        break;
    }
    
    this.setState({
      value: this.state.params
    });
  }
  
  handleChangeRadio(event) {
    this.state.params.gender = event.target.value;
    
    this.setState({
      value: this.state.params
    });
  }  
  
  
  render() {
    return (
      <div className="Form">
        <header className="Form-header">
          <h1 className="Form-title">Day1 Task</h1>
        </header>
        <form>
          <label>
            Name:
          </label>
          <input type="text" name="name" value={ this.state.params.name } onChange={ this.handleChange } />
          <label>
            Email:
          </label>
          <input type="text" name="email" value={ this.state.params.email } onChange={ this.handleChange } />
          <label>
            Country:
          </label>
          <select name="country" value={ this.state.country }>
            <option value="Japan">Japan</option>
            <option value="nihon">Nihon</option>
            <option value="Nippon">Nippon</option>
          </select>
          <label>
            Gender:
          </label>
          <input type="radio" name="gender" value="male" checked={ this.state.gender === "male" } onChange={ this.handleChangeRadio } />
          <input type="radio" name="gender" value="female" checked={ this.state.gender === "female" } onChange={ this.handleChangeRadio } />
        </form>
      </div>
    );
  }
}

export default Form;
