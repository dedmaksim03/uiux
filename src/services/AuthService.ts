import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { DataResponse } from '../models/response/DataResponse';
import { CategoriesResponse } from '../models/response/CategoriesResponse';

export default class AuthService {
  static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth', { username, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }

  static async getData(): Promise<AxiosResponse<DataResponse>> {
    return $api.get('/users/info');
  }

  static async getCategories(): Promise<AxiosResponse<CategoriesResponse>> {
    return $api.get('/users/categories');
  }
}
