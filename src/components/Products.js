import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'
import util from '../util'
import br from '../images/br.jpg'
import pi from '../images/pi.jpg'
import sn from '../images/sn.jpg'
import fr from '../images/fr.jpg'
import '../components/product.css'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
         
            <div className="col-md-4" key={product.id}>
               <ListGroup>
  <ListGroup.Item>
                <div className="thumbnail text-center imgdiv">
                    <a href={`#${product.id}`}onSelect={(e)=>this.props.handleAddToCart(e, product)}>
                        <img className="imgdiv" src={br} alt={product.title} />
                        <p>Burger</p>                        
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div></ListGroup.Item>
</ListGroup>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
