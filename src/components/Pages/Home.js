import React, { Component } from "react";
import Map from "../Content/Map/Maps";
import DropdownEE from "../Content/DropdownEE";
import "./Home.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class HomePg extends Component {
  render() {
    const { auth } = this.props;
    //    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="title"></div>
        <div className="maps">
          <Map maph={"86vh"} />
        </div>
        <div className="dropdown">
          <div className="active">
            <h2>Active</h2>
            <DropdownEE />
          </div>

          <div className="details">
            <h2>Details</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(HomePg);
