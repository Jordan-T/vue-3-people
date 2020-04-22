import { ref, computed } from 'vue';
import { fetchPeople as fetchPeopleService } from '../service/people'
import { Person } from 'src/@types/Person';

export const people = ref([] as Person[]);
export const peopleLoading = ref(false);
export const peopleError = ref('');
export const hasPeople = computed(() => {
	return people.value.length !== 0
})

let fetchPeoplePromise = undefined as undefined | Promise<void|Person[]>;

export const fetchPeople = () => {
	if (fetchPeoplePromise === undefined) {
		peopleLoading.value = true;
		peopleError.value = '';

		fetchPeoplePromise = fetchPeopleService()
			.then(response => {
				people.value = response;
				peopleLoading.value = false;
			})
			.catch(e => {
				peopleError.value = e;
			});
	} else {
		return fetchPeoplePromise;
	}
}
