import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}
export default App;