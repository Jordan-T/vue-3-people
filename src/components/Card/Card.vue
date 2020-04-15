<template>
	<section class="Card card">
		<div class="card-content">
			<!-- @slot Use for the main content -->
			<slot />
		</div>
		<div class="card-action" v-if="$slots.actions">
			<!-- @slot Use for the actions -->
			<slot name="actions"/>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'Card'
})
</script>

<style src="./Card.css"></style>

