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
            originalRequest._retry = true;
            try {
                await api.post('/auth/refresh'); // Change URL selon ton API
                return api(originalRequest);
            } catch (err) {
                // Gestion des erreurs de rafraîchissement du token
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

export { api }