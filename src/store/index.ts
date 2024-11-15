import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { API_URL } from '../http';

export default class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(username: string, password: string) {
    try {
      const response = await AuthService.login(username, password);
      console.log(response);
      localStorage.setItem('token', response.data.token);
      this.setAuth(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem('token');
      this.setAuth(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`, {}, { withCredentials: true });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      this.setAuth(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
