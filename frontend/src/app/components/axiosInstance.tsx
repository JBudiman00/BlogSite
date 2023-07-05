import axios, {  AxiosRequestConfig } from 'axios';

const api = axios.create({
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
    (error) => {
        const originalRequest = error.config;
        originalRequest.retryCount = originalRequest.retryCount || false;
        // Handle response error
        // Check if the error response status code indicates an expired access token
        if (!originalRequest.retryCount && error.response.status === 401) {
            // Perform token refresh logic and retry the failed request
            // Return a new Promise to trigger a retry of the original request
            originalRequest.retryCount = true;
            // return new Promise((resolve, _) => {
            //     api.post('/auth/refresh').then(() => {
            //         resolve(axios(error.config));
            //         });
            // })
        }
      // For other types of errors, reject the promise
      return Promise.reject(error);
    }
  );
  
export default api;