import { ApiBaseUrl, request } from "./request";

export const ADD_CASE = (data?: any) =>
  request<any>("post", `${ApiBaseUrl}/api/Case`, data, { headers: { "Content-Type": "multipart/form-data" } });

export const GET_CASE = (params?: { data: any }) => request<any>("get", `${ApiBaseUrl}/api/Case`, params);
