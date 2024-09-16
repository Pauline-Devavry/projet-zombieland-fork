import { createContext, useEffect, useState } from "react"
import { api } from "../api/axiosConfig"

export const AuthContext = createContext()

function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/auth/me")
                if(response && response.data) {
                    setUser(response.data)
                }
            } catch (error) {
                if(error.response && error.response.status === 401) {
                    return
                } else {
                    console.log("Erreur lors de la connexion")
                }
            }
            
        }
        fetchUser()
    },[])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider