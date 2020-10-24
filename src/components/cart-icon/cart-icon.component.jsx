import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	CartIconContainer,
	ShoppingIconContainer,
	ItemsCountContainer
} from './cart-icon.styles';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, cartCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIconContainer />
		<ItemsCountContainer>{cartCount}</ItemsCountContainer>
	</CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
	cartCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);