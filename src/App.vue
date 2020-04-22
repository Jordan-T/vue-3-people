<template>
	<div class="App">
		<header>
			<AppBar />
		</header>
		<main>
			<Suspense>
				<template #default>
					<router-view></router-view>
				</template>
				<template #fallback>
					Loading...
				</template>
			</Suspense>
		</main>
	</div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useRoute } from 'vue-router';
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
		IndexRoute,
		PersonRoute,
	}
});
</script>

<style src="./index.css"></style>
<style src="./App.css"></style>
