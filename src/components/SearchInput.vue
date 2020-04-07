<template>
	<div class="SearchInput input-field">
    <i class="material-icons prefix">search</i>
    <input :id="id" type="text" :value="value" v-bind="$attrs" @input="onInput" />
    <label :for="id" :class="value ? 'active' : null">
      {{label}}
    </label>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		id: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
	methods: {
		onInput(e) {
			this.$emit('update:value', e.target.value);
		}
	}
});
</script>

<style src="./SearchInput.css"></style>
