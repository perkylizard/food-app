import React from 'react';
import MyCard from './components/card/card';
import Todo from './components/orderop/order'
import Orderop from './components/orderop/order';



export default class App  extends React.Component{
  render(){
    return(
      <React.Fragment>
    <MyCard/>
    <Orderop/>
      </React.Fragment>
    )
  }
} 