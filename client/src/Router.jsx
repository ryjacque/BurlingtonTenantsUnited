import React from "react";
import App from "./App.js";
import Calendar from "./components/Calendar";
import Review from "./components/LandlordReview/Review";
import Signup from "./components/Signup";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import header from "./components/images/header.png";
import "./Router.css";

function Router() {
  return (
    <div id="app-container">
      <BrowserRouter>
        <header>
          <img
            id="home-link"
            src={header}
            alt="Burlington Tenants"
            width="80%"
          />
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/calendar">Community Calendar</Link>
            <Link to="/review">Review Your Landlord</Link>
            <Link to="/join">Join Us!</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/join" element={<Signup />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer id="footer">
          <nav className="nav-bar" >
            <Link to="/contact">Contact Burlington Tenants United</Link>
            <Link to="/login">Admin Login</Link>
      
          </nav>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default Router;
