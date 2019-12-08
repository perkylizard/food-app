import React from 'react';
import {Card,Button} from 'react-bootstrap';
import '../card/card.css';
import Navigation from '../navbar/navbar'
import Img from '../../images/burger.jpg'


export default class MyCard extends React.Component{
    render(){
        return(
            <React.Fragment>
               <Card className="bg-dark text-white">
                <Card.Img src={Img} alt="Card image" />
                <Card.ImgOverlay>
                <Navigation/>
                <div className="container">
              <Card.Title className="text-light lg"><h1>Have no time <br/>to prepare <span className="text-warning">food</span>?</h1></Card.Title>
             <Card.Text className="text-light">
             Choose one of our plans, enter delivery time <br/> and enjoy delicious food without leaving your home!
          </Card.Text>
    <Card.Text className="btn"><Button variant="warning" className="text-white btn1">Order Food</Button></Card.Text>
    </div>
  </Card.ImgOverlay>
</Card>

            </React.Fragment>
        )
    }
}