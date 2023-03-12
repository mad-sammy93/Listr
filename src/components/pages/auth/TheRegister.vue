<script lang="ts">

import axios from 'axios';
export default{
    data() {
        return {
            name:'',
            email: '',
            password: '',
            formIsValid:true,
            // mode: 'login',
            // isLoading: false,
            error: null,
            responseData:''
        };
    },
    methods: {
        async submitSignupData() {
            // console.log(this.email+' '+ this.name +' '+ this.password)

            // try{
                let result:any = await axios.post("https://nextjs-dev.deploy.nl/auth/register",{
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    },
                    // {
                    //     headers: {
                    //         'content-type': 'text/json'
                    //     }
                    // }
                )
                // .then((response) => {
                //     console.log(response);
                //     // let responseData = JSON.stringify(response)
                //     // let div = document.createElement("#app");
                //     // div.append(responseData)
                // }, (error) => {
                //     console.log(error);
                // });

                console.debug(result);
                if(result.status == 201){
                    alert('Signup success');
                    // localStorage.setItem("user-info", JSON.stringify(result.config.data))
                    this.$router.push({name:'login'})

                }else{
                    confirm('failed');
                }
            // }catch(error:any) {
            // //     this.error = err.message || 'Failed to authenticate. Check login data';
            //     console.log(error.message)
            // }


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
    },
    mounted() {
        console.warn("mount")
        let user = localStorage.getItem('user-info')
        if(user) {
            this.$router.push({name:'home'})
        }
    }
}
</script>
<template>
    <h3>Sign-Up</h3>

    <form @submit.prevent="submitSignupData">
        
        <div class="form-control">
            <input type="text" id="name" v-model="name" placeholder="Enter Name">
        </div>
        <div class="form-control">
            <input type="email" id="email" v-model="email" placeholder="Enter Email">
        </div>
        <div class="form-control">
            <input type="password" id="password" v-model="password" placeholder="Enter Password">
        </div>
        <div class="form-control submit__button">
            <button type="submit">Sign-Up</button>
            <router-link to="/login" ><button>Login</button></router-link>
        </div>
    </form>
</template>



<style scoped>
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