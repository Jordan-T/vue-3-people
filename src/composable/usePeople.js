import { people, peopleLoading, hasPeople, fetchPeople } from '../store/people'

export default function usePeople() {
	if (!hasPeople.value) {
		fetchPeople();
	}

	return {
		people,
		peopleLoading,
		hasPeople,
	}
}
