<template>
	<img class="card-avatar" :src="photoUrl" :alt="altText" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CardAvatar',
	props: {
		/** The url of the avatar */
		photoUrl: {
			type: String,
			required: true,
		},

		/** The alt text */
		altText: {
			type: String,
			default: '',
		},
	}
});
</script>
