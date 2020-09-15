import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-and-signup.styles.scss';

const SignInAndSignupPage = () => (
	<div className='signin-and-signup'>
		<SignIn />
		<SignUp />
	</div>
)

export default SignInAndSignupPage;