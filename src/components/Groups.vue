<script setup lang="ts">
  import {IGroup} from '../models'
  const props = defineProps<{
    groups: IGroup[]
  }>();
</script>

<template>
  <div class="groups">
    <div class="wrapper">

    <article v-for="{group_id} in props.groups" :key="group_id" class="group">
      <h3 class="title">Группа {{group_id}}</h3>
        <div class="players">
          <p class="player">Участник 1</p>
        </div>
    </article>
    
  </div>
</div>
</template>

<style lang="scss" scoped>
.groups {
  width: 50%;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
}

.players {
  background-color: #ccc;
  height: 100%;
  min-height: 220px;
}

.title {
  padding-bottom: 10px;
  font-weight: 500;
}
.player {
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    color: rgb(12, 203, 130);
  }
}

</style>