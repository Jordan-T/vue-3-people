<template>
	<Spinner v-if="people.peopleLoading" />
	<div v-else class="card-container">
		<template v-if="!hasFound">
			not found :(
		</template>
		<PersonCard v-else-if="!isEdit" :person="person" hasEdit @edit="isEdit = true" />
		<PersonForm v-else @done="isEdit = false" />
	</div>
</template>

<script>
import { defineComponent, inject, ref, computed } from 'vue';
import Spinner from '../components/Spinner.vue'
import PersonCard from '../components/PersonCard/PersonCard.vue'
import PersonForm from '../components/PersonForm/PersonForm.vue'
import usePeople from '../composable/usePeople'

export default defineComponent({
	setup() {
		const route = inject('route');
		const isEdit = ref(false);
		const people = usePeople();

		const person = computed(() => {
			return people.people.value.find((person) => person.id === route.value.params.id);
		});
		const hasFound = computed(() => {
			return person.value !== undefined;
		});

		return { route, isEdit, people, person, hasFound };
	},
	components: {
		Spinner,
		PersonCard,
		PersonForm,
	},
});
</script>
