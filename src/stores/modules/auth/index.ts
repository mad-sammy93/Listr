import { defineStore } from 'pinia';
// import { Client } from '../api/client';

export const useAuth = defineStore('auth', {
  state: () => ({
    authToken: ''
  }),

  getters: {
    isAuthenticated(boolean) {
      return !!this.authToken;
    }
  },

  actions: {
    // async login(username:string, password:string) {
    //   try {
    //     const response = await Client().login({
    //       body: { username, password }
    //     });

    //     this.authToken = response.token;
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },

    logout() {
      this.authToken = '';
    }
  }
});