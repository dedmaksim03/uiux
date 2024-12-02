import { AxiosResponse } from "axios";
import $api from "../http"
import { DataResponse } from "../models/response/DataResponse";
import { CategoriesResponse } from "../models/response/CategoriesResponse";

export const getData = async (): Promise<AxiosResponse<DataResponse>> => {
    return $api.get('/users/info');
}

export const getCategories = async (): Promise<AxiosResponse> => {
    return $api.get('/users/categories');
  }