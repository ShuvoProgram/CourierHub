import './App.css';
import SidebarWithHeader from './components/SidebarWithHeader';
import Dashboard from './pages/Dashboard/Dashboard';
// import { RouterProvider } from 'react-router-dom';
// import routes from './routes/routes';
import SIgnIn from './pages/SignIn/SIgnIn';

function App() {

  return (
    <>
      {/* <RouterProvider router={routes}/> */}
      {/* <SIgnIn/> */}
      {/* <SidebarWithHeader /> */}
      <Dashboard/>
    </>
  )
}

export default App;
