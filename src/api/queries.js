import { gql } from 'react-apollo';

export const allChallenges = gql`
	query allChallenges {
		allChallenges {
			name
		}
	}
`;

export const challenge = gql`
	query challenge($pk: Int) {
		challenge(pk:$pk) {
			name
		}
	}
`;