<template>
	<a
		:class="[
			'Fab btn-default btn-floating waves-effect waves-light',
			this.large ? 'btn-large' : ''
		]"
		@click.prevent="$emit('click')"
	>
		<i class="material-icons">{{ kind }}</i>
	</a>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		kind: {
			type: String,
			required: true,
		},
		large: Boolean,
	}
});
</script>
