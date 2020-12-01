import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>PIZZINI</h1>
            <p>
            The Pizzini offers best in class, quick-fire pizza that is made to order using only the freshest dough and the best, 
            locally sourced ingredients. Our signature pizzas are hand stretched thin and quick-fired to perfection. 
            We also offer classically good wings, fries, desserts and even brunch pies.
 </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
