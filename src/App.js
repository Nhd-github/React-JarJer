import React from "react";

// Component 
import NavHeader from "./components/navHeader/index.js";
// Img
import pizzaImg from "./assets/images/Group 124.png";
import burgerImg from "./assets/images/Group 131.png";
import sandwichImg from "./assets/images/Group 138.png";
import chickenImg from "./assets/images/Group 132.png";
import pastaImg from "./assets/images/Group 134.png";
import dessertImg from "./assets/images/Group 134.png";
import backRecentImg from "./assets/images/Rectangle (1).png";
import recentImg from "./assets/images/Rectangle 9.png";
import homemadeBurgerImg from "./assets/images/homemadeBurger.png";
import burgerBehindImg from "./assets/images/burger.png";
import thumbImg from "./assets/images/White-in-Jumper3.png";

// svg
import location from "./assets/icons/location.svg";
import shoppingBasket from "./assets/icons/shoppingBasket.svg";
// style 
import "./assets/css/bootstrap.rtl.min.css";
import './assets/css/style.css';

function App() {
  return (<>


    <div className="container-fluid" style={{ overflowX: 'hidden'}}>
      <div className="row">

        <div className="container-fluid m-3">
          <div className="row">
            <div className="left-section col-sm-12 col-md-8 flex-colum">
              < NavHeader />
              <div className=" col-sm-12 col-md-8 d-flex justify-content-between align-items-center  mt-5">
                <div className=" d-flex align-items-center justify-content-around m-4">

                  <img src={location} className="fa fa-location text-center m-1" alt="location" />
                  <span className="Location border-start p-1">My Location</span>
                  <span className="Location border-start p-1" style={{ color: 'green' }}>New York, Left Side Blue
                    Door</span>
                </div>

              </div>
              <div className=" col-sm-12 col-md-8 d-flex justify-content-between align-items-center  m-3">
                <div className="input-group mb-8">
                  <input type="text" className="form-control" placeholder="Search..."
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary bg-dark account-button"
                      type="button">Search</button>
                  </div>
                </div>
              </div>

              <div
                className=" col-sm-12 col-md-8 d-flex flex-column justify-content-around align-items-start  m-5">
                <div className="d-flex mb-2 color-gray">Popular Category</div>
                <div className="d-flex justify-content-around align-items-center w-100">
                  <div className="rectangle-popular-items"><img src={pizzaImg} alt="PizzaImg" />
                    <span>Pizza</span>
                  </div>
                  <div className="rectangle-popular-items"><img src={burgerImg} alt="BurgerImg" />
                    <span>Burger</span>
                  </div>
                  <div className="rectangle-popular-items"><img src={sandwichImg} alt="SandwichImg" />
                    <span>Sandwich</span>
                  </div>
                  <div className="rectangle-popular-items"><img src={chickenImg} alt="ChickenImg" />
                    <span>Chicken</span>
                  </div>
                  <div className="rectangle-popular-items"><img src={pastaImg}
                    alt="PastaImg" /><span>Pasta</span> </div>
                  <div className="rectangle-popular-items"><img src={dessertImg} alt="DessertImg" />
                    <span>Dessert</span>
                  </div>
                </div>
              </div>
              <div
                className=" col-sm-12 col-md-8 d-flex flex-column justify-content-around align-items-start  m-5">
                <div className="d-flex mb-2 color-gray">Recently Pre Ordered </div>
                <div className="d-flex justify-content-around align-items-center w-100">

                  <div className="col-sm-12 col-md-6 rectangle-recent-order-left d-flex ">

                    <img className="img-order" src={backRecentImg} alt="BackRecentImg" />
                    <div className="d-flex tiny-logo-left align-items-center">

                      <img className="img-ratio" src={recentImg} alt="RecentImg" />
                      <div className="flex-colum m-start-2  text-white font-16 p-1">
                        <span style={{ display: 'block' }}>King Burger</span>
                        <span style={{ display: 'block' }}>Rate 8/10</span>
                      </div>
                    </div>

                  </div>
                  <div className="col-sm-12 col-md-6 rectangle-recent-order-right d-flex">

                    <img className="img-order" src={backRecentImg} alt="BackRecentImg" />
                    <div className="d-flex tiny-logo-right align-items-center">

                      <img className="img-ratio" src={recentImg} alt="RecentImg" />
                      <div className="flex-colum m-start-2  text-white font-16 p-1">
                        <span style={{ display: 'block' }}>King Burger</span>
                        <span style={{ display: 'block' }}>Rate 8/10</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className=" right-section col-sm-12 col-md-4 ">
              <div className="container">
                <div className="flex-colum w-100">
                  <div
                    className=" col-sm-12 col-md-4 d-flex justify-content-around align-items-center text-dark w-100">

                    <img src={shoppingBasket} alt="shoppingBasket" className="" />
                    <button className="account-button mt-2">Account</button>
                  </div>

                  <div
                    className=" col-sm-12 col-md-4 d-flex justify-content-around align-items-center text-dark ">
                    <img className="front-burger" src={homemadeBurgerImg} alt="HomemadeBurger" />
                    <img className="behind-burger"
                      src={burgerBehindImg}
                      alt="burgerBehindImg" />
                    <img className="thumb-like" src={thumbImg} alt="thumbImg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </>

  );
}

export default App;
