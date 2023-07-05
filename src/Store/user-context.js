import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        name: '', 
        surname: '',
        job: '',
        headline: '',
        img: '',
        phone: '',
        email: '',
        address: '',
        section: '',
        university:'',
        city: '',
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        skills: '',
        powerfullPoints: '',
        projects: '',
    })
    return <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
}
export default UserContextProvider;