import React, { Component } from 'react';
import Customer from './Components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '강민신',
  'birthday': '650128',
  'gender': '남자',
  'job': '사업가'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이세인',
  'birthday': '720223',
  'gender': '여자',
  'job': '회사원'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '강체로',
  'birthday': '120504',
  'gender': '아이',
  'job': '초딩생'
}]
class App extends Component {
  render() {
    return (
      <div>
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        />
      </div>
    );
}
}

export default App;
