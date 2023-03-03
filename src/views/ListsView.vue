<script setup lang="ts">
  import { ref } from 'vue'
  import ListItem from '../components/ListItem.vue'
  import ListCard from '../components/UI/ListCard.vue'
  import RemoveButton from '../components/UI/RemoveButton.vue'

  let newTodo : any = ref('');
  let todos : any = ref([]);

  function addNewToDo() {
    console.log(newTodo.value);
    todos.value.push({
      id:Date.now(),
      done:false,
      content:newTodo.value
    })
    newTodo.value = ''
  }

  function toggleDone(todo:any){
    todo.done = !todo.done;
  }
  function removeTodo(index: any) {
    todos.value.splice(index,1);
  }
  function markAllDone(){
    todos.value.forEach((todo:any)=> todo.done = true)
  }

</script>

<template>
<div class="lists">
  <main>
    <form @submit.prevent="addNewToDo">
      <label for="">New Todo</label>
      <input name="newTodo" v-model="newTodo">
      <button>Add</button>
    </form>
    <div >
      {{ newTodo }}
    </div>
    <list-card>
      <button @click="markAllDone">Mark All Done</button>
      <ul>
        <li v-for="(todo,index) in todos" :key="todo.id" :class="{strike:todo.done}">
          <ListItem   class="todo"  @click="toggleDone(todo)">{{ todo.content }}</ListItem><remove-button @click="removeTodo(index)"/>
        </li>
      </ul>
    </list-card>
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
  /* .strike:before{
    padding-right: 8px;
    color: yellow; 
  } */
  .strike .todo {
    text-decoration: line-through;
  }
  /* .delete {
    content:'❌'
  } */
  .todo{
    cursor:pointer;
  }
  ul {
    padding: 0;
    margin: 0;
  }   
  ul li{
    display: flex;
    list-style: none; /* Remove HTML bullets */
    padding-left: 10px;
  }
  li.strike:before {
    content: '✅';
    position: absolute;
    top: 4px;
    left: -20px;
    /* padding-left: 40px; */
    padding-right: 16px;
  }
}
</style>