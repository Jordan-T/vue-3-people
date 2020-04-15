<template>
	<div className="input-field">
		<input
			:id="id"
			:name="name"
			:type="type"
			:value="value"
			onChange={onChange}
			:disabled="disabled"
			:class="isInvalid ? 'invalid' : ''"
			autoComplete="off"
		/>
		<label :for="id" :class="value ? 'active' : ''">
			{{label}}
		</label>
		<span class="helper-text" :data-error="errorMessage" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		/** The name of the input */
		name: { type: String, default: '' },

		/** The label of the input */
		label: { type: String, default: '' },

		/** The type of the input */
		type: { type: String, default: '' },

		/**
		 * The value of the input
		 * @model
		 */
		value: { type: String, default: '' },

		/** The error message of the input */
		errorMessage: { type: String, default: '' },

		/** If the input is disabled */
		disabled: Boolean,

		/** If the input is invalid */
		isInvalid: Boolean,
	},
	computed: {
		id() {
			return `person-form-${this.name}`
		}
	}
})
</script>
