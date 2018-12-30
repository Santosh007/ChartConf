import React from "react";
import ReactDOM from "react-dom";
import FormGroup from "@material-ui/core/FormGroup";

import { Legend, Title } from "./Options";

export default class ChartConfig extends React.Component {
  render() {
    return (
      <FormGroup>
        <Title />
        <Legend />
      </FormGroup>
    );
  }
}
