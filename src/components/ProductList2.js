import React, { Component } from 'react'
import axios from 'axios'
import image from '../images/smartphone-with-a-smile.svg'
import '../css/ProductList.css'

import { ProductsContext } from '../contexts/Products'

import {
  Card, CardImg, CardBody,
  CardTitle, Button, Container, Row, Col
} from 'reactstrap';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData : []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/")
    // axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(res => {
        const resData = res.data;
        console.log(resData)
        this.setState({ productData : resData })
      })
      .catch(error => {
        console.log('Server error')
      });
    console.log('Did mount');
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.productData.map((product, key) => 
            <Col key={product.id} sm="4" md="6" lg="4" xl="4" className="product">
              <Card>
                <CardImg top width="100px" height="100px" src={image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{product.id} {product.title}</CardTitle>
                  <ProductsContext.Consumer>
                    {({ addItem }) => 
                      <Button color="info" onClick={() => {addItem(product)}}>Add to cart</Button>}
                  </ProductsContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}
