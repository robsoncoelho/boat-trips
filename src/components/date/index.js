import React, { Component } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import FaArrowCircleRight from "react-icons/lib/fa/arrow-circle-right";

import "react-dates/lib/css/_datepicker.css";
import "./style.scss";

export default class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false
    };
  }

  render() {
    return (
      <section className="date">
        <p>Select a date:</p>
        <SingleDatePicker
          noBorder
          numberOfMonths={1}
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="calendar"
        />
        <button type="submit">
          <FaArrowCircleRight />
        </button>
      </section>
    );
  }
}
