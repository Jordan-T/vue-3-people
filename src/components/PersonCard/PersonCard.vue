<template>
	<Card>
		<CardAvatar
			:photoUrl="person.photo"
			:altText="`photo of ${person.firstname}`"
		/>
		<CardTitle :subTitle="person.entity">
			<Link :to="`/person/${person.id}`">{{person.firstname}} {{person.lastname}}</Link>
		</CardTitle>
		<CardInfo icon="email">
			<a :href="`mailto:${person.email}`">{{person.email}}</a>
		</CardInfo>
		<CardInfo icon="phone">
			<a :href="`tel:${person.phone}`">{{person.phone}}</a>
		</CardInfo>
		<CardInfo v-if="person.managerId" icon="supervisor_account" desc="manager">
			<Link :to="`/person/${person.managerId}`">{{person.manager}}</Link>
		</CardInfo>

		<template v-if="hasEdit" #actions>
			<a href="#" @click.prevent="onEdit">
				edit
			</a>
		</template>
	</Card>
</template>

<script>
import { defineComponent } from 'vue';
import { Link } from '@posva/vue-router-next';
import Card from '../Card/Card.vue';
import CardAvatar from '../Card/CardAvatar.vue';
import CardTitle from '../Card/CardTitle.vue';
import CardInfo from '../Card/CardInfo.vue';

export default defineComponent({
	components: {
		Card,
		CardAvatar,
		CardTitle,
		CardInfo,
		Link,
	},
	props: {
		person: {
			type: Object,
			required: true,
		},
		hasEdit: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onEdit() {
			this.$emit('edit');
		},
	},
});
</script>
