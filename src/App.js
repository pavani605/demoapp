import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import Categories from "./Categories";
import Product from "./Product";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import Cart from "./Cart";
import Review from "./Review";
import Header from "./Header";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <div>
        {/* Header should be inside the Router */}
        <Header />

        <div className="p-4">
          {/* <nav>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order-details">Order Details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
              </li>
            </ul>
          </nav> */}

          {/* Define Routes */}
          
          <Routes>
            {/* <Route path="/users" element={<Users />} /> */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </div>

        {/* Footer should also be inside the Router */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
