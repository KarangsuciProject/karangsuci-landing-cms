import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

/**
 * Request Success Handler
 */
const requestSuccessHandler = (config: InternalAxiosRequestConfig) => {
  return config;
};

/**
 * Request Fail Handler
 */
const requestErrorHandler = (err: AxiosError) => {
  return Promise.reject(err);
};

/**
 * Response Success Handler
 */
const responseSuccessHandler = (res: AxiosResponse) => {
  const response: AxiosResponse = res.data;

  if (200 <= res.status && res.status < 300) {
    return response.data;
  } else {
    return responseErrorHandler(res);
  }
};

/**
 * Response Fail handler
 */
const responseErrorHandler = (err: AxiosResponse | AxiosError) => {
  return Promise.reject(err);
};

/**
 * Axios 
 */
const request = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Axios Request Middleware
 */
request.interceptors.request.use(
  (config) => requestSuccessHandler(config),
  (err) => requestErrorHandler(err),
);

/**
 * Axios Response Middleware
 */
request.interceptors.response.use(
  (res) => responseSuccessHandler(res),
  (err) => responseErrorHandler(err),
);

export default request;
