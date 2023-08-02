<script setup lang="ts">
  import { ref, computed } from 'vue';
  import Groups from './components/Groups.vue'
  import Table from './components/Table.vue'
  import { dataPlayers, dataGroups } from './data';
  import { editByIdxAndBirthday } from './utils';
 
  const players = ref(editByIdxAndBirthday(dataPlayers))
  const groups = ref(dataGroups) 
  const sortByidx = ref<boolean>(true);
  const sortByName = ref<boolean>(true);
  const sortByBirthdate = ref<boolean>(true);

  const sortedPlayers = computed(() => {
    const sorted = players.value.slice();
    sorted.sort((a, b) => {
      return a.sortByIdx - b.sortByIdx
    });
    return sorted;
  });

  const sortPlayersByIdx = (): void => {
    sortByidx.value =!sortByidx.value
    sortedPlayers.value.sort((a, b) => {
      return sortByidx.value ? a.sortByIdx - b.sortByIdx : b.sortByIdx - a.sortByIdx
    })
  } 

  const sortPlayersByName = (): void  => {
    sortByName.value = !sortByName.value    
    sortedPlayers.value.sort((a, b) => {
      return sortByName.value ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    })
  }
  
  const sortedByBirthdate = (): void => {
  sortByBirthdate.value = !sortByBirthdate.value;
  sortedPlayers.value.sort((a, b) => {
    const dateA = a.birthday.split('.').reverse().join(''); 
    const dateB = b.birthday.split('.').reverse().join(''); 

    return sortByBirthdate.value ? Number(dateA) - Number(dateB) : Number(dateB) - Number(dateA);
  });
};
</script>

<template>
  <div class="info">
      <Table 
        :players="sortedPlayers"
        :sortByidx="sortByidx"
        :sortByName="sortByName"
        :sortByBirthdate="sortByBirthdate"
        @sortPlayersByIdx="sortPlayersByIdx"
        @sortPlayersByName="sortPlayersByName" 
        @sortedByBirthdate="sortedByBirthdate"
       />
      <Groups :groups="groups"/>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
