import React, { Component } from 'react'
import axios from 'axios'
export const ProductsContext = React.createContext();

export class ProductsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData : [],
      cartItems : [],
      setLocalStorage : JSON.parse(localStorage.getItem('itemKeys')) || []
    }

    this.addItem = this.addItem.bind(this);
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

  addItem(product) {
    const newItem = {
      id: product.id
    }
    this.state.setLocalStorage.push(newItem)
    this.setState({
        cartItems : this.state.cartItems.concat(product),
        
    }, () => {
      localStorage.setItem('itemKeys', JSON.stringify(this.state.setLocalStorage))
      console.log(this.state.cartItems)
    })
  }

  render() {
    return (
      <ProductsContext.Provider value={{
        productData : this.state.productData,
        cartItems: this.state.cartItems,
        setLocalStorage: this.state.setLocalStorage, 
        addItem: this.addItem
        }}>
        {this.props.children}
      </ProductsContext.Provider>
    )
  }
}
