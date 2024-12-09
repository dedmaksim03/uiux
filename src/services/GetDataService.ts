import { AxiosResponse } from 'axios';
import $api from '../http';
import { DataResponse } from '../models/response/DataResponse';
import { ActionsResponse } from '../models/response/ActionsResponse';

export const getData = async (): Promise<AxiosResponse<DataResponse>> => {
  return $api.get('/users/info');
};

export const getCategories = async (): Promise<AxiosResponse> => {
  return $api.get('/users/categories');
};

export const getActions = async (): Promise<AxiosResponse<ActionsResponse>> => {
  return $api.get('/users/info');
};
