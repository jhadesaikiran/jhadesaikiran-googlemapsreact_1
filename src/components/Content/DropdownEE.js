import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const countryOptions = [
  { key: "1", value: "1", flag: "1", text: "1DriverName1" },
  { key: "2", value: "2", flag: "2", text: "2DriverName1" },
  { key: "3", value: "3", flag: "3", text: "3DriverName1" },
  { key: "4", value: "4", flag: "4", text: "4DriverName1" },
  { key: "5", value: "5", flag: "5", text: "5DriverName1" },
  { key: "6ad", value: "6ad", flag: "6ad", text: "6DriverName1" },
  { key: "7ao", value: "7ao", flag: "7ao", text: "7DriverName1" },
  { key: "8ai", value: "8ai", flag: "8ai", text: "8riverName1" },
  { key: "9ag", value: "9ag", flag: "9ag", text: "9riverName1" },
  { key: "10ar", value: "10ar", flag: "10ar", text: "10riverName1" },
  { key: "11am", value: "11am", flag: "11am", text: "11DriverName1" },
  { key: "12be", value: "12be", flag: "12be", text: "12DriverName1" },
];

const DropdownEE = () => (
  <Dropdown
    placeholder="Select Driver"
    fluid
    search
    selection
    options={countryOptions}
  />
);

export default DropdownEE;
