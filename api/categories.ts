import { ApiBaseUrl, request } from "./request"

export const GET_CATEGORIES = (params?: any) => request<any>('get', `${ApiBaseUrl}/category`, params);

