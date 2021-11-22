// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      text: ""
    });
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input 
            type="text" 
            placeholder="add band" 
            onChange={this.handleChange} 
            value={this.state.name}
            />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
