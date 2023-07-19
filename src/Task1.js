import { Component } from "react";

class Task1 extends Component {
  state = {
    products: [
      { title: "React", price: "100€" },
      { title: "JavaScript", price: "70€" },
      { title: "CSS", price: "50€" },
    ],
  };
  // 1. use map method to see title and price
  // 2. Give id to your products
  // 3. export your Task1.js to App.js
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

export default Task1;
