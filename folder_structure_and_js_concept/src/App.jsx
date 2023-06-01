import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //1.this is map function to double numbers
  let numbers = [1, 2, 3, 4, 5];
  let doubleNumbers = numbers.map(function (a) {
    return a * 2;
  });

  //2.this is array destructuring to print top two drinks
  let hotDrinks = ["Hot Chocolate", "Coffee", "Caramel Latte", "Hot Boba"];
  let [first, second] = hotDrinks;

  //3.this is rest parameter to print sum .
  function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }

  let total_sum = sum(1, 2, 3, 4);
  //object destructuring to print name and description of special
  let todaysSpecials = {
    itemsName: "Chocolate Crossiant",
    itemType: "Crossiant",
    description: "Freshly Made",
  };
  let { itemsName, description } = todaysSpecials;
  const destructuredItem = itemsName;
  const destructuredDescription = description;

  //Spread Operator For object concatination
  let hotDrink = ["Coffee ", "Tea "];
  let coldDrink = ["Latte ", " Iced Tea"];
  let combinedDrinks = [...hotDrink, ...coldDrink];
  let famousDrink = [...combinedDrinks];

  return (
    <>
      <div className="header">
        <h1>Café Caramel</h1>
      </div>
      <div className="main">
        <div className="main-menu-box">
          <div className="two-menu-box">
            <div className="menu-box">
              <h3>Today's Offer</h3>
              <p>&#40; map function &#41; </p>
              <p>Pay 1 get {doubleNumbers[0]}</p>
              <p>Pay 2 get {doubleNumbers[1]}</p>
              <p>Pay 3 get {doubleNumbers[2]}</p>

              <button className="button">Order</button>
            </div>
            <div className="menu-box">
              <h3>Hot Beverages</h3>
              <p>&#40; Array destructuring &#41;</p>
              <p>Our Top Picks Are:</p>
              <p>
                {first} and {second}
              </p>
              <button className="button">Order</button>
            </div>
          </div>
          <div className="two-menu-box">
            <div className="menu-box">
              <h3>Types Of Desserts</h3>
              <p>&#40; rest parameter &#41;</p>
              <p>{total_sum}</p>
              <button className="button">Order</button>
            </div>
            <div className="menu-box">
              <h3>Today's Specials:</h3>
              <p>&#40; Object Destructuring &#41;</p>
              <p>{destructuredItem}</p>
              <p>{destructuredDescription}</p>
              <button className="button">Order</button>
            </div>
          </div>
          <div className="two-menu-box">
            <div className="menu-box">
              <h3>Our Drinks</h3>
              <p>&#40; Spread Operator &#41;</p>
              <p>{combinedDrinks}</p>
              <h3>Famous Drinks</h3>
              <p>{famousDrink}</p>
              <button className="button">Order</button>
            </div>
            <div className="menu-box">
              <h3>About Us</h3>
              <p>
                Welcome to Café caramel, where every sip and bite brings you
                moments of pure bliss.{" "}
              </p>
              <button className="button">Explore More</button>
            </div>
          </div>
        </div>
        <div className="picture"></div>
      </div>
      <div className="footer">Copywrite@2023</div>
    </>
  );
}

export default App;
