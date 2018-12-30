import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

export class Options extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export class Title extends React.Component {
  state = {
    display: true,
    title: "Chart Title"
  };

  handleChange = event => {
    this.setState({ display: !this.state.display });
  };

  handleTitleChange = title => event => {
    this.setState({
      [title]: event.target.value
    });
  };

  render() {
    return (
      <FormGroup>
        <FormLabel component="legend">Title</FormLabel>
        <FormControl component="fieldset">
          <FormControlLabel
            control={
              <Switch
                checked={this.state.display}
                onChange={this.handleChange}
                color="primary"
              />
            }
            label="Display"
          />
          <TextField
            value={this.state.title}
            disabled={!this.state.display}
            onChange={this.handleTitleChange("title")}
          />
        </FormControl>
      </FormGroup>
    );
  }
}

export class Legend extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: "top"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Legend</FormLabel>
        <RadioGroup
          aria-label="Positoin"
          name="Position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel value="top" control={<Radio />} label="Top" />
          <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl>
    );
  }
}
