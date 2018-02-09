import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
	mutation loginUser($username: String!, $password: String!) {
		loginUser(username:$username, password:$password) {
			success
			errors {
				key
				value
			}
			user {
				id
				username
				points
			}
		}
	}
`;

export const SIGNUP_MUTATION = gql`
	mutation signupUser($username: String!, $password1: String!, $password2: String!) {
		signupUser(username:$username, password1:$password1, password2:$password2) {
			success
			errors {
				key
				value
			}
			user {
				id
				username
				points
			}
		}
	}
`;

export const LOGOUT_MUTATION = gql`
	mutation logoutUser {
		logoutUser {
			success
			user {
				id
			}
		}
	}
`;

export const CHANGE_PASSWORD_MUTATION = gql`
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

export const CHECK_CHALLENGE_MUTATION = gql`
	mutation checkChallenge($id: Int!, $message: String!) {
		checkChallenge(id:$id, message:$message) {
			success
			errors {
				key
				value
			}
			user {
				id
				points
			}
			challenge {
				id
				completed
			}
		}
	}
`;