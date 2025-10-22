import { defineStore } from 'pinia';
import type { AuthState } from '../types';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    username: null,
  }),

  actions: {
    login(token: string, username: string) {
      this.token = token;
      this.username = username;
    },

    logout() {
      this.token = null;
      this.username = null;
    },
  },
});
