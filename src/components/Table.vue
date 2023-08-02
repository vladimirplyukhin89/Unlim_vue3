<script setup lang="ts">
  import getArrowIcon from '../utils/getArrowIcon'
  import { IFormattedPlayers } from '../models'

  defineProps<{
    players: IFormattedPlayers[];
    sortByidx: boolean;
    sortByName: boolean;
    sortByBirthdate: boolean;
  }>();

  const emit = defineEmits()

  const sortedByIdx = () => {
    emit('sortPlayersByIdx')
  }

  const sortedByName = () => {
    emit('sortPlayersByName')
  }

  const sortedByBirthdate = () => {
    emit('sortedByBirthdate')
  }
</script>

<template>
  <table class="table">
    <thead>
        <tr class="header">
          <th>
            <button @click="sortedByIdx" class="btn">№</button>
          </th>
          <th>
            <button @click="sortedByName" class="btn">
              Участник
              <span>
                {{ getArrowIcon(sortByName) }}
              </span>
            </button>
          </th>
          <th>
            <button @click="sortedByBirthdate" class="btn">
              Дата рождения
              <span>
                {{ getArrowIcon(sortByBirthdate) }}
              </span>
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="({name, surname, birthday, sortByIdx, id}) in players" :key="id" class="body">
          <th>{{sortByIdx}}</th>
          <th @dblclick="console.log('Works!')" class="name">{{name}} {{surname}}</th>
          <th>{{birthday}}</th>
        </tr>
      </tbody>
    </table>
</template>


<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
}
thead {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 10px 0;
}
.header, .body { 
  display: grid;
  grid-template-columns: 4rem repeat(2, minmax(10rem, 13rem))
}

.header th {
  text-align: left;
  margin-left: 10px;
  
}

.header th:first-child, 
.body th:first-child  {
  text-align: center;
  margin-left: 0;
}

tbody {
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.body th {
  margin-left: 15px;
  text-align: left;
  font-weight: 500;
}

.name {
  &:hover {
    cursor: pointer;
    color: rgb(203, 12, 197);
  } 
}

.btn {
  font-size: 1rem;
  margin-left: 10px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: rgb(203, 12, 197);
  }
}

</style>