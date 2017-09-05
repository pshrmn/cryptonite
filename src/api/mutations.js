import { gql } from 'react-apollo';

export const loginUser = gql`
	mutation loginUser($username: String!, $password: String!) {
		loginUser(username:$username, password:$password) {
			success
			errors {
				key
				value
			}
			user {
				username
				points
			}
		}
	}
`;

export const signupUser = gql`
	mutation signupUser($username: String!, $password1: String!, $password2: String!) {
		signupUser(username:$username, password1:$password1, password2:$password2) {
			success
			errors {
				key
				value
			}
			user {
				username
				points
			}
		}
	}
`;

export const logoutUser = gql`
	mutation logoutUser {
		logoutUser {
			success
		}
	}
`;

export const changePassword = gql`
	mutation changePassword($o: String!, $n1: String!, $n2: String!) {
		changePassword(oldPassword: $o, newPassword1:$n1, newPassword2: $n2) {
			success
			errors {
				key
				value
			}
		}
	}
`;
