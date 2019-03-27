import React, { Component } from 'react';
// import './Wrapper.css';
import './Wrapper.scss';
import ListBlock from './ListBlock/ListBlock';
import Form from './Form/Form'; 

class Wrapper extends Component {
  state = {
    items: [
      {
          name: 'Sandra Bullock',
          phone: '758152145',
          city: 'Cracow',
      },
      {
          name: 'Tom New',
          phone: '741852654',
          city: 'Warsaw',
      },
      {
          name: 'Mike Jack',
          phone: '753159456',
          city: 'Paris',
      },
      {
          name: 'Jack Sparrow',
          phone: '123485214',
          city: 'London',
      },
  ]
  }

  handleAddPerson = (e) => {
    e.preventDefault(); 

    const newPerson = {
      name: e.target[0].value,
      phone: e.target[1].value,
      city: e.target[2].value,
    }
    
    this.setState(prevState => ({
      items: [...prevState.items, newPerson],
    }))

    e.target.reset();
  }
  render() {
    return (
      <div className="Wrapper">
        <ListBlock items={this.state.items} />
        <Form submitFn={this.handleAddPerson}/>
      </div>
    );
  }
}

export default Wrapper;
