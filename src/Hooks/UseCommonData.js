import { useContext } from "react"
import { CommonContext } from "../Context/CommonProvider"

export const UseCommonData = () => {
    const common_data  = useContext(CommonContext);
    return common_data;
}
