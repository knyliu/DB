import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", ""); // reset the token to be empty
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-appointment">Create Appointment</Link>
      <Link to="/saved-appointments">Saved Appointments</Link>

      {/* if we have the token means we have loged in */}
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
};
