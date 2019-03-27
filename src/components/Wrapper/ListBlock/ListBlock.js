import React from "react";
// import "./ListBlock.css";
import './ListBlock.scss'
import ListItem from "./ListItem/ListItem";

class ListBlock extends React.Component {
  render() {
    const { items } = this.props

    return (
      <div className="ListBlock">
        <h2 className="ListBlock__header"> Personal Data </h2>
        <ul className="ListBlock__list">
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
