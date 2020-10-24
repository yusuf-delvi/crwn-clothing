import React from 'react';
import { connect } from 'react-redux';

import {
	CollectionItemContainer,
	BackgroundImage,
	CollectionFooterContainer,
	AddButton
} from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<BackgroundImage
				className='image'
				imageUrl={imageUrl}
			/>
			<CollectionFooterContainer>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</CollectionFooterContainer>
			<AddButton
				className='add-button'
				onClick={() => addItem(item)} inverted>
				Add to cart
			</AddButton>
		</CollectionItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);