import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SigninSignupPageContainer } from './signin-and-signup.styles';

const SignInAndSignupPage = () => (
	<SigninSignupPageContainer>
		<SignIn />
		<SignUp />
	</SigninSignupPageContainer>
)

export default SignInAndSignupPage;