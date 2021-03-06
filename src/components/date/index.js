import React, { Component } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import { onRequestData } from "../../actions/main";
import { connect } from "react-redux";

import "react-dates/lib/css/_datepicker.css";
import "./style.scss";

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date && this.state.date) {
      this.props.onRequestData(this.state.date);
    }
  }

  buttonOnPress = () => {
    if (this.state.date) {
      this.props.onRequestData(this.state.date);
    }
  }

  render() {
    const { date, focused } = this.state;
    const { isLoading } = this.props;
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
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.main.isLoading
});

const mapDispatchToProps = dispatch => ({
  onRequestData: value => {
    dispatch(onRequestData(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Date);
