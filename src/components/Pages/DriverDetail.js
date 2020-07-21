import React, { Component } from "react";
import Map from "../Content/Map/Maps";
import DrDetailTab from "../Content/DrDetailTab";
import DropdownEE from "../Content/DropdownEE";
import "./DriverDetail.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class DriverdetailPg extends Component {
  render() {
    const { auth } = this.props;
    //    if (!auth.uid) return <Redirect to="/login" />;

    console.log(this.props);
    return (
      <div className="wrapperrp">
        <div className="titlerp"></div>

        <div className="mapsrp">
          <Map maph={"42vh"} />
        </div>
        <div className="tlcontrol">
          <h1>Driver Name</h1>

          <DropdownEE />
        </div>

        <div className="tabsrp">
          <DrDetailTab />
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
    requestdata: state.data.datas,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(DriverdetailPg);
