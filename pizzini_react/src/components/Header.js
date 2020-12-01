import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>PIZINNI</h1>
            <p>
            The Pizzini offers best in class, quick-fire pizza that is made to order using only the freshest dough and the best, 
            locally sourced ingredients. Our signature pizzas are hand stretched thin and quick-fired to perfection. 
            We also offer classically good wings, fries, desserts and even brunch pies.
  </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
