import { Navigate, useLocation } from "react-router-dom";

function privateRoutes({children}) {
    const location = useLocation();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
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