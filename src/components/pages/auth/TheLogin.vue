<template>
    <form @submit.prevent="login">
      <input v-model="email" type="email" required />
      <input v-model="password" type="password" required />
      <button>Sign In</button>
    </form>
  </template>
  
  <script lang="ts">
  import { useAuthStore } from '@/stores/modules/auth'
  import {ref} from 'vue'
  
  export default {
    setup() {
      const authStore = useAuthStore()
  
      const email = ref<string>('')
      const password = ref('')
  
      const login = () => {
        authStore.login(email.value, password.value)
      }
  
      return {
        email,
        password,
        login,
      }
    },
  }
  </script>
  