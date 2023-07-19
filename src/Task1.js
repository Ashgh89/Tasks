import { Component } from "react";

class Task1 extends Component {
  state = {
    products: [
      { title: "React", price: "100€" },
      { title: "JavaScript", price: "70€" },
      { title: "CSS", price: "50€" },
    ],
  };
  // YOUR TASK IS TO SEE TITLE AND PRICE IN THE BROWSER
  // 1. use map method to see title and price
  // 2. Give id to your products
  // 3. export your Task1.js to App.js
  // YOU CAN SEE THE TITLE AND PRICE IN THE BROWSER


  // Next Task
  // 4. Now create a button in JSX and give it onClick
  // 5. When you click on your button, you should have some Sales
  // That means => React 80€ - JavaScript 50€ - CSS 30€

  // 6. Don't forget to style it 
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

export default Task1;
