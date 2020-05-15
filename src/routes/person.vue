<template>
	<h1>List of person - fix for routes</h1>
	<WithPeople>
		<div class="card-container">
			<template v-if="!hasFound">
				not found :(
			</template>
			<PersonCard v-else-if="!isEdit" :person="person" hasEdit @edit="isEdit = true" />
			<PersonForm v-else @cancel="isEdit = false" />
		</div>
	</WithPeople>
</template>

<script lang="ts">
import { defineComponent, inject, ref, computed, Ref } from 'vue';
import WithPeople from '../components/WithPeople.vue'
import PersonCard from '../components/PersonCard/PersonCard.vue'
import PersonForm from '../components/PersonForm/PersonForm.vue'
import { people } from '../store/people'
import { useRoute } from 'vue-router';

export default defineComponent({
	setup() {
		const route = useRoute();
		const isEdit = ref(false);

		const person = computed(() => {
			return people.value.find((person) => person.id === route.params.id);
		});
		const hasFound = computed(() => {
			return person.value !== undefined;
		});

		return { route, isEdit, people, person, hasFound };
	},
	components: {
		WithPeople,
		PersonCard,
		PersonForm,
	},
});
</script>
