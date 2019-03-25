import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    const { submitFn } = this.props

    return (
      <form className="Form" onSubmit={submitFn}>
        <p className="Form__paragraph"> Fill in ... </p>
        <input placeholder="Name" className="Form__input" required/>
        <input placeholder="Phone number" className="Form__input" required/>
        <input placeholder="City" className="Form__input" required/>
        <button type="submit" className="Form__button">Add new person</button>
      </form>
    );
  }
}

export default Form;
