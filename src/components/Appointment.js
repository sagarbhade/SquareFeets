import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import axios from 'axios';

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date

    })
  }


  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);

  }


  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} state={{ aptDate: this.state.startDate }}>
          <div className="form-group">
            <h2 style={{ color: "red", fontSize: 20 }}>Pick a Date and Time : </h2>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
            />
            <button className="btn btn-primary" style={{ width: '10rem' }}>Show Date</button>
          </div>
        </form>
      </div>

    );
  }

}
export default Appointment;