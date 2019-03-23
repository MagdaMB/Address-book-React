import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    const { submitFn } = this.props

    return (
      <form className="Form" onSubmit={submitFn}>
        <p> Fill in ... </p>
        <input placeholder="Name"/>
        <input placeholder="Phone number" />
        <input placeholder="City" />
        <button type="submit">Add new person</button>
      </form>
    );
  }
}

export default Form;
