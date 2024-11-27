import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { API_URL } from '../http';
import { DataResponse } from '../models/response/DataResponse';
import { CategoriesResponse } from '../models/response/CategoriesResponse';

export default class Store {
  isAuth = false;
  data = [];
  categories = [];
  username = '';

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

  async getData() {
    try {
      const response = await AuthService.getData();
      console.log(response);
      this.data = response.data.data;
      this.username = response.data.username;
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async getCategories() {
    try {
      const response = await AuthService.getCategories();
      console.log(response);
      this.categories = response.data.categories;
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
