<template>
  <WithPeople>
    <div class="card-container">
      <h1 v-if="filterdPeople.length === 0 && search !== ''">Not found</h1>
      <h1 v-else-if="filterdPeople.length === 0">No person</h1>
      <template v-else>
        <PersonCard v-for="person in filterdPeople" :key="person.id" :person="person" />
      </template>
    </div>

    <div class="control-container">
      <SearchInput id="search" label="search by name" v-model:value.trim="search" />
    </div>
  </WithPeople>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import WithPeople from "../components/WithPeople.vue";
import SearchInput from "../components/SearchInput.vue";
import PersonCard from "../components/PersonCard/PersonCard.vue";
import { people } from "../store/people";

export default defineComponent({
  setup() {
    const search = ref("");
    const filterdPeople = computed(() => {
      return people.value.filter(person => {
        if (search.value === "") {
          return true;
        }

        const re = new RegExp(search.value, "i");
        return re.test(person.firstname) || re.test(person.lastname);
      });
    });

    return { search, filterdPeople };
  },
  components: {
    WithPeople,
    SearchInput,
    PersonCard
  }
});
</script>
