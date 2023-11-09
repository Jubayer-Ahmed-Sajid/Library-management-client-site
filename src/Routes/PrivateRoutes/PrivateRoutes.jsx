import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <h2>Loading...</h2>
    }

    if (user?.email){
    return children
    }
    return <Navigate to='/login' replace></Navigate>
};
PrivateRoutes.propTypes ={
    children: PropTypes.node
}

export default PrivateRoutes;