import { createContext, useEffect, useState } from "react"
import { api } from "../api/axiosConfig"

export const AuthContext = createContext()

function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            const fetchUser = async () => {
                const response = await api.get("/auth/me")
                console.log(response.data)
                setUser(response.data)
            }
            fetchUser()
        } catch {
            setUser(null)
        }
    },[])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider