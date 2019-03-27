import React from 'react';
// import "./ListItem.css";
import './ListItem.scss';

class ListItem extends React.Component {
    render() {
  const { name, phone, city } = this.props
        return(
            
              <li className="ListItem__element">
                <h4>{name}</h4>
                <p>{phone}</p>
                <p>{city}</p>
              </li>  
            
        )
    }
}

export default ListItem;