import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/request">Request</NavLink>
        </li>
        <li>
          <NavLink to="/driverdetailpg">DriverDetail</NavLink>
        </li>
        <li>
          <a onClick={props.signOut()}>Log Out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating green lighten-1">
            PP
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
