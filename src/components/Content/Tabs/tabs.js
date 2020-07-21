/*

import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Table from "react-bootstrap/Table";
import "./tabscss.css";
import "react-tabs/style/react-tabs.css";
import "./index.css";

const containerMargin = "1%";

//class TabLists extends React.Component {
function TabLists() {
  return (
    <div style={{ marginTop: 20 }}>
      <Tabs defaultIndex={0} id="mainTab" forceRenderTabPanel>
        <TabList className="tabheader">
          <Tab>Incoming Requests</Tab>
          <Tab>Permission Granted</Tab>
          <Tab>Rejected</Tab>
          <Tab>Starred Requests</Tab>
        </TabList>
        <TabPanel>
          <div
            style={{
              marginRight: containerMargin,
              marginLeft: containerMargin,
              marginTop: 10,
            }}
            className="col-lg-11"
          >
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Requested Time</th>
                  <th>Driver Name</th>
                  <th>Patient Case</th>

                  <th>Timer</th>
                  <th>From To</th>
                  <th>E T J</th>
                  <th>Distance</th>
                  <th>No. Of ts</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>06:34 PM</td>
                  <td>Firoz Alam</td>
                  <td>Fever</td>

                  <td>06:34 PM</td>
                  <td>UP-New Delhi</td>
                  <td>10 hrs</td>
                  <td>300 KM</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      id="grant1"
                      className="btn btn-success"
                    >
                      Grant
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="reject1"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="star1"
                      className="btn btn-primary"
                    >
                      Starred
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>06:34 PM</td>
                  <td>Firoz Alam</td>
                  <td>Fever</td>

                  <td>06:34 PM</td>
                  <td>UP-New Delhi</td>
                  <td>10 hrs</td>
                  <td>300 KM</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      id="grant2"
                      className="btn btn-success"
                    >
                      Grant
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="reject2"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="star2"
                      className="btn btn-primary"
                    >
                      Starred
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>06:34 PM</td>
                  <td>Firoz Alam</td>
                  <td>Fever</td>

                  <td>06:34 PM</td>
                  <td>UP-New Delhi</td>
                  <td>10 hrs</td>
                  <td>300 KM</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      id="grant3"
                      className="btn btn-success"
                    >
                      Grant
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="reject3"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="star3"
                      className="btn btn-primary"
                    >
                      Starred
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>06:34 PM</td>
                  <td>Firoz Alam</td>
                  <td>Fever</td>

                  <td>06:34 PM</td>
                  <td>UP-New Delhi</td>
                  <td>10 hrs</td>
                  <td>300 KM</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      id="grant4"
                      className="btn btn-success"
                    >
                      Grant
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="reject4"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="star4"
                      className="btn btn-primary"
                    >
                      Starred
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>06:34 PM</td>
                  <td>Firoz Alam</td>
                  <td>Fever</td>

                  <td>06:34 PM</td>
                  <td>UP-New Delhi</td>
                  <td>10 hrs</td>
                  <td>300 KM</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      id="grant5"
                      className="btn btn-success"
                    >
                      Grant
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="reject5"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="star5"
                      className="btn btn-primary"
                    >
                      Starred
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>06:34 PM</td>
                  <td>Firoz Alam</td>
                  <td>Fever</td>

                  <td>06:34 PM</td>
                  <td>UP-New Delhi</td>
                  <td>10 hrs</td>
                  <td>300 KM</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      id="grant6"
                      className="btn btn-success"
                    >
                      Grant
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="reject6"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      id="star6"
                      className="btn btn-primary"
                    >
                      Starred
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>Rejected Panel</TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
}

export default TabLists;
*/

import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "react-bootstrap/Table";
/*import "./css/tab.css";
import "./css/index.css";
import Switch from "react-switch";
import "./css/switch.css";
import "./css/home.css";
*/
const containerMargin = "5%";

export default class TabLists extends Component {
  constructor() {
    super();
    this.switch1 = { checked: false };
    this.switch2 = { checked: false };
    this.switch3 = { checked: false };
    this.switch4 = { checked: false };
    this.switch5 = { checked: false };
    this.switch6 = { checked: false };
    this.switch7 = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Tabs defaultIndex={0} id="mainTab" forceRenderTabPanel>
          <TabList>
            <Tab>Incoming Requests</Tab>
            <Tab>Permission Granted</Tab>
            <Tab>Rejected</Tab>
            <Tab>Starred Requests</Tab>
          </TabList>
          <TabPanel>
            <div className="DivTableGrid">
              <Table TableGrid striped bordered hover>
                <thead>
                  <tr>
                    <th>Driver Name</th>
                    <th>Patient Case</th>
                    <th>Requested Time</th>
                    <th>Timer</th>
                    <th>From To</th>
                    <th>E T J</th>
                    <th>Distance</th>
                    <th>No. of ts</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Firoz Alam</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant1"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject1"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star1"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Kiran</td>
                    <td>Cough</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant2"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject2"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star2"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Karan</td>
                    <td>Cold</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant3"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject3"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star3"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Pankaj</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant4"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject4"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star4"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sunil</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant5"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject5"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star5"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ravi</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant6"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject6"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star6"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Suraj</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Raunak</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ranveer</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Pawan</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Irfan</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>William</td>
                    <td>Fever</td>
                    <td>06:34 PM</td>
                    <td>06:34 PM</td>
                    <td>UP-New Delhi</td>
                    <td>10 hrs</td>
                    <td>300 KM</td>
                    <td>1</td>
                    <td>
                      <div className="wrapper">
                        <label
                          htmlFor="yes_radio"
                          id="yes-lbl"
                          title="Click here for Automatic"
                        >
                          Auto
                        </label>
                        <input
                          type="radio"
                          value="1"
                          name="choice_radio"
                          id="yes_radio"
                        />
                        <label
                          htmlFor="maybe_radio"
                          id="maybe-lbl"
                          title="Click here for Neutral/off"
                        >
                          Off
                        </label>
                        <input
                          type="radio"
                          value="0"
                          name="choice_radio"
                          id="maybe_radio"
                          checked="checked"
                        />
                        <label
                          htmlFor="no_radio"
                          id="no-lbl"
                          title="Click here for Manual"
                        >
                          Man
                        </label>
                        <input
                          type="radio"
                          value="2"
                          name="choice_radio"
                          id="no_radio"
                        />
                        <div className="toggle"></div>
                      </div>
                      <button
                        type="button"
                        id="grant7"
                        className="btn btn-success"
                      >
                        Grant
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="reject7"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        id="star7"
                        className="btn btn-primary"
                      >
                        Starred
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    );
  }
}
