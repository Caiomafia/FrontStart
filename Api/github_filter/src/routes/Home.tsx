import { useState } from "react";

import { UserProps } from "../types/user";

import Search from "../components/Search";

{useState}
const Home = () =>{

    const [user, setUser] = useState<UserProps| null >(null);
    
    const loadUser = async(userName:string) => { 
        //usando fech e aqui o link para acessar os user names
        const res = await fetch(`https://api.github.com/users/ ${userName}`)

        const data = await res.json()
    }

    return  (
        <div>  
           <Search/>
        </div> 
)    
}
export default Home