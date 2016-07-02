// @flow

import React, { Component } from "react";
import {
  DatePickerIOS,
  View
} from 'react-native';
import styles from '../styles/styles.js'

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date, dateChange } = this.props;
    var offset = (-1) * (new Date()).getTimezoneOffset();
    return (
      <View>
        <DatePickerIOS
          style={styles.datePicker}
          date={date}
          mode="datetime"
          timeZoneOffsetInMinutes={offset}
          onDateChange={dateChange}
          minuteInterval={10}
        />
      </View>
    )
  }
}
