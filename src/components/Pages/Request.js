import React, { Component } from "react";
import Map from "../Content/Map/Maps";
import TabLists from "../Content/Tabs/tabs";
import "./Request.css";
//import "../Content/Tabs/css/bootstrap_old.min.css";

import DropdownEE from "../Content/DropdownEE";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class RequestPg extends Component {
  render() {
    const { auth } = this.props;
    //    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="wrapperrp">
        <div className="titlerp"></div>

        <div className="mapsrp">
          <Map maph={"42vh"} />
        </div>
        <div className="tlcontrol">
          <h1>Control</h1>

          <DropdownEE />
        </div>

        <div className="tabsrp">
          <TabLists />
        </div>
        <div className="detailrp">
          <h1>Details</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(RequestPg);
