<template>
	<img class="card-avatar" :src="photoUrl" :alt="altText" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		photoUrl: {
			type: String,
			required: true,
		},
		altText: {
			type: String,
			default: '',
		},
	}
});
</script>
