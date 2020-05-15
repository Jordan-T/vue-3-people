<template>
	<div class="SearchInput input-field">
		<i class="material-icons prefix">search</i>
		<input :id="id" type="text" :value="value" v-bind="$attrs" @input="onInput" />
		<label :for="id" :class="value ? 'active' : null">{{label}}</label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SearchInput",
	props: {
		/** The id of the input */
		id: {
			type: String,
			required: true
		},

		/** The label */
		label: {
			type: String,
			required: true
		},

		/**
			* The value
			* @model
			*/
		value: {
			type: String,
			required: true
		}
	},
	methods: {
		onInput(e:Event) {
			/**
				* The update value
				*
				* @property {string} value The new value of the input
				*/
			this.$emit("update:value", (e.target as HTMLInputElement).value);
		}
	}
});
</script>

<style lang="scss">
	@import "./SearchInput.css"
</style>
