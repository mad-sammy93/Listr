<script setup lang="ts">
  import { ref } from 'vue'
  import ListItem from '../components/ListItem.vue'

  let newTodo = ref('');
  let todos = ref([]);

  function addNewToDo() {
    console.log(newTodo.value);
    todos.value.push({
      done:false,
      content:newTodo.value
    })
  }


</script>

<template>
<div class="lists">
  <main>
    <form @submit.prevent="addNewToDo">
      <label for="">New Todo</label>
      <input name="newTodo" v-model="newTodo">
      <button>Add</button>
  </form>{{ newTodo }}
   <ListItem></ListItem>
  </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .lists {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>