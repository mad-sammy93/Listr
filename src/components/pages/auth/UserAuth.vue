<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../../UI/BaseButton.vue'
import { useAuthStore } from '@/stores/modules/auth'

const formIsValid = ref<boolean>(false);
const email = ref<string>('');
const mode = ref<string>('login');
const password = ref<string>('');
const isLoading = ref<boolean>(false);
const error = ref<any>(null);
const store = useAuthStore();

async function submitForm() {
        formIsValid.value = true
            if(email.value === '' || !email.value.includes('@') || password.value.length < 6){
                formIsValid.value = false
            }
            //http request
            
            isLoading.value = true;

            const actionPayload = {
                email: email.value,
                password: password.value,
            };

            try{
                if(mode.value === 'login'){
                    await store.dispatch('login', actionPayload)
                } else {
                    await store.dispatch('signup', {
                        email: email.value,
                        password: password.value,
                    });
                }
                // const redirectUrl = '/' + ($route.value.query.redirect || 'coaches')
                // $router.value.replace(redirectUrl)
            } catch(err) {
                error.value = err.message || 'Failed to authenticate. Check login data';
            }
            

            isLoading.value = false;
        }
</script>
<template>
    <div>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="email">
                </div>
                
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password">
                </div>
                <p v-if="!formIsValid">Please enter a valid email and password, must be atleast 6 characters long</p>
                <base-button>{{ submitButtonCaption }}</base-button>
                <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
            </form>
        </base-card>
    </div>
</template>
