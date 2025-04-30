import { createContext, useState } from "react";
// step1 : create context
const AuthContext = createContext();

// step 2: wrap the all the child inside a provider

// step3: create the info that has to be passed to child like isLogged
const [isLogged, setIsLogged] = useState(false);

export { AuthContext };
