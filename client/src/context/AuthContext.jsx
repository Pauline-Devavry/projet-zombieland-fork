import { createContext, useEffect, useState } from "react"
import { api } from "../api/axiosConfig"

export const AuthContext = createContext()

function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const hasToken = await api.get("/auth/check-token")
                if(hasToken.data) {
                    const response = await api.get("/auth/me")
                    console.log("User data:", response.data);
                    if(response && response.data) {
                        setUser(response.data)
                    }
                }
            } catch (error) {
                if(error.response && error.response.status === 401) {
                    return Promise.resolve(error)
                } else {
                    console.log("Erreur lors de la connexion")
                }
            } finally {
                setLoading(false)
            }
            
        }
        fetchUser()
    },[])

    return (
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider