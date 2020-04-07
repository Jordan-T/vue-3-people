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

<script>
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		name: { type: String, default: '' },
		label: { type: String, default: '' },
		type: { type: String, default: '' },
		value: { type: String, default: '' },
		disabled: { type: String, default: '' },
		errorMessage: { type: String, default: '' },
		isInvalid: Boolean,
	},
	computed: {
		id() {
			return `person-form-${this.name}`
		}
	}
})
</script>
