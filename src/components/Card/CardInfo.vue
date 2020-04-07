<template>
  <div class="card-info">
    <i class="material-icons" :title="desc || icon">
      {{icon}}
    </i>
    <span><slot /></span>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		icon: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			default: '',
		},
	}
});
</script>
