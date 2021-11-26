import { useContext } from "react"
import { AuthContext } from "../Context/AuthPorvider/AuthProvider"

export const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}
