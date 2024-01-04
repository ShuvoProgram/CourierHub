import { Box } from '@chakra-ui/react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {

  return (
    <Box w="full">
   <RouterProvider router={routes} />
    </Box>
  )
}

export default App;
