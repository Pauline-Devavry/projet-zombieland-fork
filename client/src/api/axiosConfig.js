import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Content-Type': "application/json"
    },
    withCredentials: true
})

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            // Ne pas essayer de rafraîchir le token pour /auth/me
            //if (originalRequest.url === "/auth/me") {
            //    return Promise.reject(error);
            //}

            originalRequest._retry = true;
            try {
                await api.post('/auth/refresh');
                return api(originalRequest);
            } catch (err) {
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export { api }