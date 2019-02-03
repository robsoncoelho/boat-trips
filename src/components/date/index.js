import React, { Component } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import { request } from "../../api";
import moment from "moment";
import FaArrowCircleRight from "react-icons/lib/fa/arrow-circle-right";

import "react-dates/lib/css/_datepicker.css";
import "./style.scss";

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
      isLoading: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.searchResults(this.state.date);
    }
  }

  searchResults = date => {
    if (date) {
      this.setState({ isLoading: true });
      request(date.format("YYYY-MM-DD"))
        .then(response => response[0])
        .then(data => {
          this.setState({ isLoading: false });
          console.log(data);
        });
    }
  };

  render() {
    const { date, isLoading, focused } = this.state;
    return (
      <section className="date">
        <p>Select a date:</p>
        <SingleDatePicker
          noBorder
          numberOfMonths={1}
          date={date}
          disabled={isLoading}
          onDateChange={date => this.setState({ date })}
          focused={focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="calendar"
        />
        <button disabled={isLoading} type="submit">
          <FaArrowCircleRight className={isLoading ? "disabled" : undefined} />
        </button>
      </section>
    );
  }
}
