import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Table from "react-bootstrap/Table";
//import "./Tabs/css/tab.css";
import "react-tabs/style/react-tabs.css";

const containerMargin = "5%";

//class TabLists extends React.Component {
function DrDetailTab() {
  return (
    <div style={{ marginTop: 20 }}>
      <Tabs defaultIndex={0} id="mainTab" forceRenderTabPanel>
        <TabList className="tabheader">
          <Tab>Past Rides</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanel>
          <div
            style={{
              marginRight: containerMargin,
              marginLeft: containerMargin,
              marginTop: 20,
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

export default DrDetailTab;
