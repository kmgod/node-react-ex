import React, { Component } from 'react';
import Customer from './Components/Customer'
import './App.css';

const customer = {
  'id': 1,
  'image': 'https://placeimg.com/128/128/any',
  'name': '강민신',
  'birthday': '650128',
  'gender': '여자',
  'job': '사업가'
}
class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
}
}

export default App;
