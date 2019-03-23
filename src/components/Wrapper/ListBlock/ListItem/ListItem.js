import React from 'react';
import "./ListItem.css";

class ListItem extends React.Component {
    render() {
  const { name, phone, city } = this.props
        return(
            
              <li>
                <h4>{name}</h4>
                <p>{phone}</p>
                <p>{city}</p>
              </li>  
            
        )
    }
}

export default ListItem;