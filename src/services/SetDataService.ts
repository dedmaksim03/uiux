import { AxiosResponse } from 'axios';
import $api from '../http';
import { DataResponse } from '../models/response/DataResponse';
import { ActionsResponse } from '../models/response/ActionsResponse';
import { ActionResponse } from '../models/response/ActionResponse';

export const addNewAction = async (action: ActionResponse): Promise<AxiosResponse<ActionResponse>> => {
  return $api.post('/users/put', action);
};
