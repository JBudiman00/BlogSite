import axios, {  AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
});

const axiosRefresh = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true
});

interface AxiosConfig extends AxiosRequestConfig {
    retryCount?: boolean
}

api.interceptors.response.use(
    (response) => {
      // Process successful response
      return response;
    },
    async (error) => {
        const originalRequest = error.config;
        originalRequest._retry = originalRequest._retry || false;
        // Handle response error
        // Check if the error response status code indicates an expired access token
        if (originalRequest._retry === false && error.response.status === 401) {
            // Perform token refresh logic and retry the failed request
            // Return a new Promise to trigger a retry of the original request
            originalRequest._retry = true;
            return axiosRefresh.post("/auth/refresh").then((res) => {
              if (res.status === 201) {
                console.log("Access token refreshed");
                return api(originalRequest);
              }
            });
        }
      // For other types of errors, reject the promise
      return Promise.reject(error);
    }
  );
  
export default api;