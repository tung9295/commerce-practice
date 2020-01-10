import React, { Component } from 'react'
import { ProductsContext } from '../contexts/Products'

import '../css/Cart.css'

import image from '../images/smartphone-with-a-smile.svg'
import { CardBody, Col } from 'reactstrap';

export default class Cart extends Component {
	render() {
		return (
			<ProductsContext.Consumer>
				{({ cartItems, productData, setLocalStorage }) => 
					<React.Fragment>
						{setLocalStorage.map(value =>
							productData.filter(oneProduct => oneProduct.id === value.id).map(
								(product) =>
								<Col key={product.id} sm="4" md="6" lg="4" xl="3" className="product">
									<div className="cart-card">
										<img className="cart-card-image" src={image} alt="Card img cap" />
										<CardBody>
											<div className="cart-card-title">{product.id} {product.title}</div>
										</CardBody>
									</div>
								</Col>
							)
					)}
					</React.Fragment>
				}
			</ProductsContext.Consumer>
		)
	}
}
