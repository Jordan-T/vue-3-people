<template>
	<Card>
		<CardAvatar :photoUrl="person.photo" :altText="`photo of ${person.firstname}`" />
		<CardTitle :subTitle="person.entity">
			<router-link :to="`/person/${person.id}`">{{person.firstname}} {{person.lastname}}</router-link>
		</CardTitle>
		<CardInfo icon="email">
			<a :href="`mailto:${person.email}`">{{person.email}}</a>
		</CardInfo>
		<CardInfo icon="phone">
			<a :href="`tel:${person.phone}`">{{person.phone}}</a>
		</CardInfo>
		<CardInfo v-if="person.managerId" icon="supervisor_account" desc="manager">
			<router-link :to="`/person/${person.managerId}`">{{person.manager}}</router-link>
		</CardInfo>

		<template v-if="hasEdit" #actions>
			<a href="#" @click.prevent="onEdit">edit</a>
		</template>
	</Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Person } from "../../@types/Person";
import { useRoute } from "vue-router";
import Card from "../Card/Card.vue";
import CardAvatar from "../Card/CardAvatar.vue";
import CardTitle from "../Card/CardTitle.vue";
import CardInfo from "../Card/CardInfo.vue";

export default defineComponent({
	name: "PersonCard",
	setup() {
		useRoute();
	},
	components: {
		Card,
		CardAvatar,
		CardTitle,
		CardInfo,
	},
	props: {
		/** The current person */
		person: {
			type: Object as PropType<Person>,
			required: true
		},

		/** If has edit action */
		hasEdit: Boolean
	},
	methods: {
		onEdit() {
			/** When edit button clicked */
			this.$emit("edit");
		}
	}
});
</script>
