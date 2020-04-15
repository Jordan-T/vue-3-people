<template>
  <Spinner v-if="people.peopleLoading" />
  <template v-else>
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
  </template>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import Spinner from "../components/Spinner.vue";
import SearchInput from "../components/SearchInput.vue";
import PersonCard from "../components/PersonCard/PersonCard.vue";
import usePeople from "../composable/usePeople";

export default defineComponent({
  setup() {
    const search = ref("");
    const people = usePeople();
    const filterdPeople = computed(() => {
      return people.people.value.filter(person => {
        if (search.value === "") {
          return true;
        }

        const re = new RegExp(search.value, "i");
        return re.test(person.firstname) || re.test(person.lastname);
      });
    });

    return { people, search, filterdPeople };
  },
  components: {
    Spinner,
    SearchInput,
    PersonCard
  }
});
</script>
