<script setup>
import { ref } from 'vue'
import { useTaskStoreComp } from '../stores/TaskStoreComposition'

const taskStoreComp = useTaskStoreComp()
const newTask = ref('')

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStoreComp.addTask({
      id: Math.floor(Math.random() * 10000),
      title: newTask.value,
      isFav: false
    })
    newTask.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to do..." v-model="newTask" />
    <button>Add Task</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;

  button {
    background: #ffd859;
    border: 0;
    padding: 10px;
    font-family: 'Poppins';
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
  }

  input {
    border: 0;
    padding: 10px;
    border-radius: 6px;
    color: #555;
    font-size: 1em;
  }
}
</style>
