<template>
	<div class="App">
		<header>
			<AppBar />
		</header>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { View, useRoute } from '@posva/vue-router-next';
import AppBar from './components/AppBar.vue';
import IndexRoute from './routes/index.vue';
import PersonRoute from './routes/person.vue';

export default defineComponent({
  name: 'App',
  setup() {
		useRoute();
	},
	components: {
		AppBar,
		View,
		IndexRoute,
		PersonRoute,
	}
});
</script>

<style src="./index.css"></style>
<style src="./App.css"></style>
