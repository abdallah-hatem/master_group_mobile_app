import type { AxiosRequestConfig, Method } from "axios"

import axios from "axios"

const axiosInstance = axios.create({
  timeout: 6000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (config) => {
    if (config?.data?.message) {
      // $message.success(config.data.message)
    }

    return config?.data
  },
  (error) => {
    // if needs to navigate to login page when request exception
    // history.replace('/login');
    let errorMessage = "Oops! Something went wrong. Please try again later."

    console.log(error.response)

    if (error?.message?.includes("Network Error")) {
      errorMessage = "Network Error. Please check your network connection."
    } else if (error?.response?.status === 401) {
      errorMessage = "Unauthorized. Please login again."
    } else if (error?.response?.status === 403) {
      errorMessage = "Forbidden. Please contact administrator."
    } else {
      errorMessage = error?.message
      // history.replace('/errorPage');
    }

    console.dir(error)

    return {
      status: false,
      message: errorMessage,
      result: null,
    }
  }
)

export type Response<T = any> = {
  status: boolean
  message: string
  result: T
}

export type MyResponse<T = any> = Promise<Response<T>>

// export const ApiBaseUrl = "http://localhost:5242"
export const ApiBaseUrl = "http://10.0.2.2:5242"
// export const ApiBaseUrl = "http://192.168.1.7:5242"

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(
  method: Lowercase<Method>,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): MyResponse<T> => {
  const configPost = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    ...config,
  }

  if (method === "post") {
    return axiosInstance.post(url, data, configPost)
  } else if (method === "put") {
    return axiosInstance.put(url, data, configPost)
  } else if (method === "delete") {
    return axiosInstance.delete(url, configPost)
  } else {
    return axiosInstance.get(url, {
      params: data,
      ...configPost,
    })
  }
}
