import './App.css';
import SidebarWithHeader from './components/SidebarWithHeader/SidebarWithHeader';
// import { RouterProvider } from 'react-router-dom';
// import routes from './routes/routes';
import SIgnIn from './pages/SignIn/SIgnIn';

function App() {

  return (
    <>
      {/* <RouterProvider router={routes}/> */}
      {/* <SIgnIn/> */}
      <SidebarWithHeader/>
    </>
  )
}

export default App;
