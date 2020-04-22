<template>
	<WithAsyncData
		:value="people"
		:error="peopleError"
		:loading="peopleLoading"
	>
		<slot :value="people" />
	</WithAsyncData>
</template>

<script>
import { defineComponent } from "vue";
import WithAsyncData from '../components/WithAsyncData.vue';
import usePeople from "../composable/usePeople";

export default defineComponent({
	name: 'WithPeople',
	components: {WithAsyncData},
	setup() {
		const { people, peopleLoading, peopleError } = usePeople();

		return { people, peopleLoading, peopleError };
	}
});
</script>
