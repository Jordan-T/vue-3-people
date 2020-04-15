<template>
	<div class="card-info">
		<i class="material-icons" :title="desc || icon">{{icon}}</i>
		<span>
			<!-- @slot The main content -->
			<slot />
		</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CardInfo",
	props: {
		/**
			* The icon value
			* @see https://material.io/resources/icons/?style=baseline
			*/
		icon: {
			type: String,
			required: true
		},

		/** The description of the icon */
		desc: {
			type: String,
			default: ""
		}
	}
});
</script>
