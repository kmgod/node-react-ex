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
        {
          customers.map(c => {
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            );
          })
        }

      </div>
    );
  }
}

export default App;
