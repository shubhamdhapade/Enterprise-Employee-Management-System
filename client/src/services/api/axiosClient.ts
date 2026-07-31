/**
 * -----------------------------------------------------------------------------
 * File: axiosClient.ts
 * Feature: Shared API Layer
 * Ticket: EEMS-30
 * Description:
 * Reusable Axios client configuration for all HTTP requests.
 * -----------------------------------------------------------------------------
 */

import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:3001/", // Replace with your API base URL
    timeout: 10000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

/**
 * Request Interceptor
 * This interceptor is called before each request is sent.
 * You can modify the request config here, such as adding authentication tokens.
 */

axiosClient.interceptors.request.use(
    (config) => {
        // Example: Add an Authorization header if a token is available
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * This interceptor is called after a response is received.
 * You can handle global response errors or modify the response data here.
 */
axiosClient.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // You can handle global errors here, such as logging out the user on 401 Unauthorized
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access, e.g., redirect to login page
            console.error('Unauthorized access - redirecting to login.');
        } else {
            // Handle other errors
            console.error('API error occurred:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosClient;