import gql from 'graphql-tag';

export const ALL_CHALLENGES_QUERY = gql`
	query allChallenges {
		allChallenges {
			id
			name
			problem
			description
			cipher
			points
			pointsRequired
			canDo
			completed
		}
	}
`;

export const CHALLENGE_QUERY = gql`
	query challenge($id: Int!) {
		challenge(id:$id) {
			id
			name
			problem
			description
			cipher
			points
			pointsRequired
			canDo
			completed
		}
	}
`;

export const USER_QUERY = gql`
	query user {
		user {
			id
			username
			points
		}
	}
`;
