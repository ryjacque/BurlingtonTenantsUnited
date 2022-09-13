import React, { useState } from "react";
import App from "./App.js";
import Calendar from "./components/Calendar";
import Review from "./components/LandlordReview/Review";
import Signup from "./components/Signup";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import AdminDash from "./components/AdminDash.jsx";
import ViewMembers from "./components/ViewMembers.jsx";
import ViewReviews from "./components/ViewReviews.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import header from "./components/images/header.png";
import "./Router.css";

function Router() {
  const [adminMode, setAdminMode] = useState(false);
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
            {!adminMode ? (
              <>
                <Link to="/calendar">Community Calendar</Link>
                <Link to="/review">Review Your Landlord</Link>
                <Link to="/join">Join Us!</Link>
              </>
            ) : (
              <>
                <Link to="/admin">Dashboard</Link>
                <Link to="/admin/members">Members</Link>
                <Link to="/admin/reviews">Reviews</Link>
              </>
            )}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<App setAdminMode={setAdminMode} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/join" element={<Signup />} />
          <Route path="/review" element={<Review />} />
          <Route
            path="/login"
            element={<Login setAdminMode={setAdminMode} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={<AdminDash setAdminMode={setAdminMode} />}
          />
          <Route path="/admin/members" element={ <ViewMembers setAdminMode={setAdminMode} />} />
          <Route path="/admin/reviews" element={ <ViewReviews setAdminMode={setAdminMode} />} />
        </Routes>

        {!adminMode ? (
          <>
            <footer id="footer">
              <nav className="nav-bar">
                <Link to="/contact">Contact Burlington Tenants United</Link>
                <Link to="/login">Admin Login</Link>
              </nav>
            </footer>
          </>
        ) : null}
      </BrowserRouter>
    </div>
  );
}

export default Router;
