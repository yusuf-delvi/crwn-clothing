import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubTitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer 
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
		<BackgroundImageContainer
			className='background-image'
			imageUrl={imageUrl}
		/>
		<ContentContainer className='content'>
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubTitle>SHOP NOW</ContentSubTitle>
		</ContentContainer>
	</MenuItemContainer>
)

export default withRouter(MenuItem);