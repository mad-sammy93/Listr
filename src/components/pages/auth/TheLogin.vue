<template>
  <h3>Login</h3>
  <form @submit.prevent="submitLoginData">

    <div class="form-control">
      <input v-model="email" type="email" required placeholder="Email" />
    </div>

    <div class="form-control">
      <input v-model="password" type="password" required placeholder="Password" />
    </div>

    <div class="form-control submit__button">
      <button type="submit">Sign In</button>
      <router-link to="/register" ><button>Signup</button></router-link>
    </div>
  </form>
</template>

<!-- <script lang="ts" >
  // import { useAuthStore } from '@/stores/modules/auth'
  // import {ref, reactive} from 'vue'
  
  // export default {
  //   setup() {
  //     const authStore = useAuthStore()
  
  //     const email = ref<string>('')
  //     const password = ref('')
  
  //     const login = () => {
  //       authStore.login(email.value, password.value)
  //     }
  
  //     return {
  //       email,
  //       password,
  //       login,
  //     }
  //   },
  // }

  </script> -->

<script lang="ts">
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // login(){
    //   alert('login funciton')
    // }

    async submitLoginData() {
      // console.log(this.email+' '+ this.name +' '+ this.password)

      try{
      let result: any = await axios.post(
        'https://nextjs-dev.deploy.nl/auth/login',
        {
          email: this.email,
          password: this.password
        }
        // {
        //     headers: {
        //         'content-type': 'text/json'
        //     }
        // }
      )
      // .then((response) => {
      //     console.log(response.data.accessToken);
      //     localStorage.setItem("user-logged-in", JSON.stringify(result.data.accessToken));
      //     // let responseData = JSON.stringify(response)
      //     // let div = document.createElement("#app");
      //     // div.append(responseData)

      //   }, (error) => {
      //       console.log(error);
      //   });

        // console.debug(result)
        if (result.status == 201) {
          alert('Login success')
          // console.log(result.data.accessToken)
          localStorage.setItem("user-logged-in", JSON.stringify(result.data.accessToken));
          this.$router.push({name:'home'})
        } else {
          confirm('failed')
        }
      }catch(error:any) {
      //     this.error = err.message || 'Failed to authenticate. Check login data';
          console.log(error.message)
      }

      // if(this.email === '' || !this.email.includes('@') || this.password.length < 6){
      //     this.formIsValid = false
      // }

      // const actionPayload = {
      //     name: this.name,
      //     email: this.email,
      //     password: this.password,
      // };

      // try{
      //     // if(this.mode === 'login'){
      //     //     await this.$store.dispatch('login', actionPayload)
      //     // } else {
      //         await this.$store.dispatch('signup', {
      //             email: this.email,
      //             password: this.password,
      //         });
      //     // }
      //     const redirectUrl = '/' + (this.$route.query.redirect || 'coaches')
      //     this.$router.replace(redirectUrl)
      // } catch(err) {
      //     this.error = err.message || 'Failed to authenticate. Check login data';
      // }
    }
  }
}
</script>

<style scoped>
.form-control {
  display: block;
  width: 100%;
}
input {
  width: 100%;
  height: 40px;
  border: 1px solid white;
  font-size: 20px;
}
::placeholder {
  font-size: 20px;
}
.submit__button button {
  height: 40px;
  border: 1px solid white;
  width: 100%;
}
.submit__button button:hover {
  height: 40px;
  border: 1px solid white;
  width: 100%;
}
.form-control{
    display: block;
    width: 100%;
}
input{
    width:100%;
    height: 40px;border: 1px solid white;
    font-size: 20px;
}
::placeholder{
    font-size: 20px;
}
.submit__button button{

    height: 40px;border: 1px solid white;
    width:100%;
}
.submit__button button:hover{

height: 40px;border: 1px solid white;
width:100%;
}

</style>
