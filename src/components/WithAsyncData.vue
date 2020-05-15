<template>
	<div v-if="error">
		<!-- @slot The error slot-->
		<slot name="error" :error="error">{{ error }}</slot>
	</div>
	<div v-else-if="loading">
		<!-- @slot The loading slot-->
		<slot name="fallback">
			<Spinner />
		</slot>
	</div>
	<div v-else>
		<!-- @slot The main slot-->
		<slot :value="value" />
	</div>
</template>

<script lang="ts">
import { onErrorCaptured, defineComponent } from "vue";
import Spinner from './Spinner.vue';

export default defineComponent({
	name: "WithAsyncData",
	components: {Spinner},
	props: {
		value: { type: [Object, String, Array, Number, Boolean], default: "" },
		error: { type: String, default: "" },
		loading: Boolean
	}
});
</script>
