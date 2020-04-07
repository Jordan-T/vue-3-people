<template>
	<section class="Card card">
		<div class="card-content"><slot /></div>
		<div class="card-action" v-if="$slots.actions"><slot name="actions"/></div>
	</section>
</template>

<style src="./Card.css"></style>

