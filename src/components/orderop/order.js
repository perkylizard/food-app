import React from 'react';
import {Card,CardGroup,Row,Col,Container,ListGroup} from 'react-bootstrap';
import '../orderop/order.css';
import bg from '../../images/Image.png'
import Cart from '../cart'

export default class Orderop extends React.Component{

    render(){
        return(
            <React.Fragment>
       <Card className="bg-dark text-white">
  <Card.Img src={bg} alt="Card image" />
  <Card.ImgOverlay>
    <Cart/>
    
  </Card.ImgOverlay>
</Card>
</React.Fragment>
        )
    }
} 