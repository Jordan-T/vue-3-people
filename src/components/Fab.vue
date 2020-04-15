<template>
	<a
		:class="[
			'Fab btn-default btn-floating waves-effect waves-light',
			this.large ? 'btn-large' : ''
		]"
		@click.prevent="onClick"
	>
		<i class="material-icons">{{ kind }}</i>
	</a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		/**
			* The king of fab
			* It's the value of the icon
			* @see https://material.io/resources/icons/?style=baseline
			*/
		kind: {
			type: String,
			required: true
		},

		/** If it's large */
		large: Boolean
	},
	methods: {
		onClick() {
			/**
				* When the fab was clicked (prevented)
				*/
			this.$emit("click");
		}
	}
});
</script>
