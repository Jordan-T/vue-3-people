import { ref, computed } from 'vue';
import { fetchPeople as fetchPeopleService } from '../service/people'

export const people = ref([]);
export const peopleLoading = ref(false);
export const hasPeople = computed(() => {
	return people.value.length !== 0
})

let fetchPeoplePromise = undefined;

export const fetchPeople = () => {
	if (fetchPeoplePromise === undefined) {
		peopleLoading.value = true;
		fetchPeoplePromise = fetchPeopleService()
			.then(response => {
				people.value = response;
				peopleLoading.value = false;
			});
	} else {
		return fetchPeoplePromise;
	}
}
