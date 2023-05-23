<script setup>
import { useTaskStoreComp } from '../stores/TaskStoreComposition'

const props = defineProps({
  task: {
    id: Number,
    title: String,
    isFav: Boolean
  }
})

const taskStoreComp = useTaskStoreComp()
</script>

<template>
  <div class="task">
    <h3>{{ props.task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStoreComp.deleteTask(task.id)">delete</i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStoreComp.toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  .icons {
    display: inline-block;
  }
  .icons {
    text-align: right;

    i {
      font-size: 1.4em;
      margin-left: 6px;
      cursor: pointer;
      color: #bbb;
    }

    i.active {
      color: #ff005d;
    }
  }
}
</style>
