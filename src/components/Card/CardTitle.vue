<template>
	<div class="card-title">
		<div>
			<!-- @slot Use for replate the mainTitle -->
			<slot>{{mainTitle}}</slot>
		</div>
		<div v-if="subTitle" class="card-subtitle">{{subTitle}}</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CardTitle",
	props: {
		mainTitle: {
			type: String,
			default: ""
		},
		subTitle: {
			type: String,
			default: ""
		}
	}
});
</script>
