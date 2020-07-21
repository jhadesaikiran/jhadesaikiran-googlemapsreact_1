import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SigninLinks";
import SignedOutLinks from "./signoutLink";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;
  //console.log(auth);

  // links for authentication
  //const links = auth.uid ? <SignedOutLinks /> : <SignedInLinks />;

  return (
    <nav className="nav-wrapper red draken-10" width="auto">
      <div className="container">
        <Link
          to="/"
          className="brand-logo "
          style={{
            paddingLeft: "25px",
          }}
        >
          Priority Pulse
        </Link>

        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);

/*
instead of <SignIned >
   {links}


 <nav className="nav-wrapper red draken-10">
      <div className="container">
        <Link to="/" className="brand-logo ">
          Priority Pulse
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>







   */
