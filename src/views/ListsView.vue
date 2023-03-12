<script setup lang="ts">
  import { ref,onMounted } from 'vue'
  import ListItem from '../components/ListItem.vue'
  import ListCard from '../components/UI/ListCard.vue'
  import RemoveButton from '../components/UI/RemoveButton.vue'
  import BaseButton from '../components/UI/BaseButton.vue'
  import { useRouter } from 'vue-router'


  let newTodo : any = ref('');
  let todos : any = ref([]);

  const router = useRouter()
  onMounted(() => {
    let user =localStorage.getItem('user-logged-in');
    if(!user){
      router.push({name:'register'})
    }

  })

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
      <!-- <label for="">Add item</label> -->
      <input name="newTodo" class="add_todo" v-model="newTodo" placeholder="Add item">
      <base-button>Add</base-button>
    </form>
    <!-- <div >
      {{ newTodo }}
    </div> -->
    <list-card >
      <base-button @click="markAllDone">Mark All Done</base-button>
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
  .add_todo{
    background-color: transparent;
    border: 0;
    font-size: 2rem;
    color: var(--color-text);    
    border-bottom: 1px solid var(--color-text);

  }
  label {
    font-size: 2em;
    color: var(--color-text);
    opacity: 0.7;
  }
  ::placeholder{
    font-size: 1.7rem;
  }
  ul {
    padding: 0;
    margin: 0;
  }   
  ul li{
    display: flex;
    list-style: none;
    padding-left: 40px;
  }
  li.strike:before {
    content: '✅';
    position: absolute;
    top: 4px;
    left: 0px;
    padding-left: 5px;
    padding-right: 16px;
  }
}
</style>