/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function privateRoutes({children}) {
  const auth = useSelector((state) => state)
    const location = useLocation();

    if(auth)
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  return children;
}

export default privateRoutes;

// import { useAppSelector } from '@/redux/hook';
// import {ReactNode} from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// interface IProps {
//     children: ReactNode;
// }

// export default function PrivateRoute({children}: IProps){
//     const {user, isLoading} = useAppSelector((state) => state.auth);

//     const {pathname} = useLocation();

//     if(isLoading) {
//         return <p>Loading...</p>;
//     }

//     if(!user?.email && !isLoading) {
//         return <Navigate to='/login' state={{path: pathname}} />
//     }
//     return children;
// }