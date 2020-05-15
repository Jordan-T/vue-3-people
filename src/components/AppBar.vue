<template>
	<nav class="AppBar">
		<img class="AppBar-logo" src="./AppBar.logo.svg" aria-label="people" alt="People" />
		<hr class="grow" />
		<router-link to="/all" exact-active-class="active">show all</router-link>
		<hr />
		<router-link to="/discover" active-class="active">discover</router-link>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
	name: 'AppBar',
	setup() {
		const route = useRoute()
	}
});
</script>

<style lang="scss">
@import "./AppBar.css";
</style>
