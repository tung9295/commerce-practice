import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../contexts/Products'
import { LinkContainer } from 'react-router-bootstrap';

import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarText
} from 'reactstrap';

export default class NavbarLayout extends Component {
	render() {
		return (
			<ProductsContext.Consumer>
				{({ setLocalStorage }) => 
					<Navbar color="info" dark expand="md">
						<LinkContainer exact to="/" >
							<NavbarBrand href="">HOME</NavbarBrand>
						</LinkContainer>
						<LinkContainer to="/account">
							<NavbarText>
								<NavLink href="">Account</NavLink>	
							</NavbarText>
						</LinkContainer>
						<NavbarText>
							<Link to="/cart">Cart ({setLocalStorage.length})</Link>
						</NavbarText>
					</Navbar>
				}
			</ProductsContext.Consumer>
		)
	}	
}
