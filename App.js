import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";

/**
 * 
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *  - Restaurant Card
 *    - Img
 *    - Name of Res, Star Rating, Cuisine ,delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 

 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestauaantCard = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDJX35GB0Ku9RDq5im7pGUTxBer8NNhQ4Xw&usqp=CAU"
        alt=""
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        <RestauaantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
          rating="4.5"
          time="38 minutes"
        />
        <RestauaantCard
          resName="KFC"
          cuisine="Burger,Fast Food"
          rating="4.3"
          time="20 minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
