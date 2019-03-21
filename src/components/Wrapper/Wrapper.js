import React, { Component } from 'react';
import './Wrapper.css';
import ListBlock from './ListBlock/ListBlock';
import Form from './Form/Form'; 

class Wrapper extends Component {
  render() {
    return (
      <div className="Wrapper">
        <ListBlock />
        <Form />
      </div>
    );
  }
}

export default Wrapper;
