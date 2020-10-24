import React from 'react';

import {
	FormInputContainer,
	Input,
	InputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
	<FormInputContainer>
		<Input onChange={handleChange} {...props} />
		{
			label ? (
				<InputLabel
					className={props.value.length ? 'shrink' : ''}
				>
					{label}
				</InputLabel>
			) : null
		}
	</FormInputContainer>
)

export default FormInput;