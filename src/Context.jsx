import { createContext, useState } from "react";

import PropTypes from 'prop-types';


export const Authcontext = createContext(null)

const Context = ({ children }) => {
   
    const [searchfield, setsearchfield] = useState(null)
    const [searcheddata, setsearcheddata] = useState(null)
    const [loading, setloading] = useState(true)
    const authinfo = {
        searchfield,
        setsearchfield,searcheddata, setsearcheddata,loading, setloading,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};
Context.propTypes = {
    children: PropTypes.node,
};

export default Context;