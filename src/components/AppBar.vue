<template>
	<nav class="AppBar">
		<img class="AppBar-logo" src="./AppBar.logo.svg" aria-label="people" alt="People" />
		<hr class="grow" />
		<Link to="/all" exact>show all</Link>
		<hr />
		<Link to="/discover">discover</Link>
		<!-- vue 3 new method: https://github.com/vuejs/rfcs/blob/master/active-rfcs/0021-router-link-scoped-slot.md
		<Link to="/discover" v-slot="{ href, navigate, isActive }">
			<a :href="href" :class="isActive ? 'active': ''" @click="navigate">
				discover
			</a>
		</Link>
		-->
	</nav>
</template>

<style src="./AppBar.css"></style>

<script>
import { defineComponent } from 'vue';
import { Link } from '@posva/vue-router-next';

export default defineComponent({
	components: {
		Link,
	}
});
</script>
