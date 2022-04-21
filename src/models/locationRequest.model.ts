import { BaseApi } from './baseApi.model';

export interface LocationRequest extends BaseApi {
  q: string;
  limit: number;
}
