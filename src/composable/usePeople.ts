import { people, peopleLoading, hasPeople, fetchPeople, peopleError } from '../store/people'

export default function usePeople() {
	if (!hasPeople.value) {
		fetchPeople();
	}

	return {
		people,
		peopleLoading,
		peopleError,
		hasPeople,
	}
}
