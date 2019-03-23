import React from "react";
import "./ListBlock.css";
import ListItem from "./ListItem/ListItem";

class ListBlock extends React.Component {
  render() {
    const { items } = this.props
    return (
      <div className="ListBlock">
        <h2> Personal Data </h2>
        <ul>
          {
            items.map((item, index) => (
              <ListItem key={index} name={item.name} phone={item.phone} city={item.city} />
            ))
          }
       </ul>
      </div>
    );
  }
}

export default ListBlock;
