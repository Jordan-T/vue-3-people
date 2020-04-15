<template>
  <h1>PERSON FORM</h1>
  <a href="#" @click.prevent="onCancel">Cancel</a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "PersonForm",
	methods: {
		onCancel() {
			/** When it canceled */
			this.$emit('cancel');
		}
	}
});
</script>
