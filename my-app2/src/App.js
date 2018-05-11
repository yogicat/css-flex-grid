import React, { Component } from 'react';
// import { filter, map, omit, groupBy, keyBy, reduce } from 'lodash'
import { filter, map, omit, keyBy, flow, groupBy, reduce } from 'lodash/fp'
import './App.css';

import Phone from './Phone'
import Address from './Address'

import aircondition from './aircondition.json'

class App extends Component {

  state = {
    phoneNumber: '',
    address: '',
    detailAddress: '',
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: target.value,
  })

  handleClick = () => console.log(this.state)

  render() {
    const { phoneNumber, address, detailAddress } = this.state
    const airconditionData = aircondition.slice(0,500)

    const newData = filter(airconditionData, (list) => list.city === '서울')

    // // date 추가
    // const newDataAddDate = map(newData, (list) => (
    //   { ...list, date: list.year + list.month }
    // ))
    // console.log(newDataAddDate)

    // // year, month 제거
    // const newDataRemoveYearMonth = map(newDataAddDate, (list) => (
    //   omit(list, ['year', 'month'])
    // ))
    // console.log(newDataRemoveYearMonth)

    // // date로 key뽑아서
    // const newDataWithKey = keyBy(newDataAddDate, 'date')
    // console.log(newDataWithKey)
    const data = flow(
      filter(x => x.city === '서울'),
      map(x => ({
        ...x,
        date: `${x.year}${x.month}`
      })),
      omit(['year', 'month']),
      keyBy('date')
    )(airconditionData)

    console.log(data)
    console.log(aircondition)

    const totalO3avg = flow(

    )
    
    // keyBy(oimt(map(filter(airconditionData,
    //   (list) => list.city === '서울'),
    //   (list) => (
    //   {
    //     ...list,
    //     date: list.year + list.month,
    //   }
    // )), ['year', 'month']), 'date')

    // const newDataByYears = groupBy(newDataAddDate, 'year')
    // console.log(newDataByYears)

    // const totalByYears = map(newDataByYears, (year) => (
    //   reduce(map(year, (month) => parseFloat(month.o3avg)), (sum, n) => sum+=n)
    // ))
    // console.log(totalByYears)

  
    // year 2008 
    // month 01 - 12

    // {
      // 201801서울: {
      //   "o3avg": "0.012",
      //   "o3max": "0.043",
      //   "o3min": "0.003",
      //   "pm10avg": "77",
      //   "pm10max": "304",
      //   "pm10min": "12",
      //   "city": "서울",
      //   "id": 1
      //   "date": 200801
      // },
      //   ...
      // }
      // {
      //   2018: {
      //     total: 2018년 o3avg의 합,
      //   }
      // }
  

    return (
      <div className="App">
        <table>
          <tbody>
            
          </tbody>
        </table>
        <Phone
          inputPhoneNumber={this.handleChange}
          phoneNumber={phoneNumber}
        />
        <Address
          inputAddress={this.handleChange}
          address={address}
          detailAddress={detailAddress}
        />
        <button onClick={this.handleClick}>submit</button>
      </div>
    );
  }
}

export default App;
