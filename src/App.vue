<script setup>
import { useTaskStore } from './stores/TaskStore'
import { useTaskStoreComp } from './stores/TaskStoreComposition'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const taskStoreComp = useTaskStoreComp()

const filter = ref('all')

const { tasks, loading, favs, favCount, totalCount } = storeToRefs(taskStoreComp)

taskStoreComp.getTasks()
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- Task Form -->

    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- Loading -->

    <div class="loading" v-if="loading">Loading Tasks...</div>

    <!-- Task list -->

    <section class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do.</p>
      <article v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </article>
    </section>

    <section class="task-list" v-else-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do.</p>
      <article v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </article>
    </section>

    <!-- Reset -->

    <button @click="taskStore.$reset">Reset</button>
  </main>
</template>

<style lang="scss" scoped>
.task-list {
  max-width: 640px;
  margin: 20px auto;
}

.filter {
  width: 640px;
  margin: 10px auto;
  text-align: right;

  button {
    display: inline-block;
    margin-left: 10px;
    background: #fff;
    border: 2px solid #555;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 0.8em;
    font-size: 1em;
  }
}

.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}

.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>
