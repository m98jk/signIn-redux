import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      towns: '',
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const city = {
      title: this.state.title,
      towns: this.state.towns,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(city),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.props.title}
            />
          </div>
          <div>
            <label>Towens: </label>
            <br />
            <input
              type="text"
              name="towns"
              onChange={this.onChange}
              value={this.props.towns}
            />
          </div>
          <br />
          <button className="bg-red-800" type="submit">
            POST
          </button>
        </form>
      </div>
    );
  }
}
