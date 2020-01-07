import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavbarLayout from './components/NavbarLayout'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Default from './components/Default'
import ProductDetails from './components/ProductDetails'
import Account from './components/Account'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarLayout></NavbarLayout>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/productDetails" component={ProductDetails}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/account" component={Account}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}
