import React from 'react'
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css'
import { Provider } from 'react-redux';
import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react'
import theme from './theme/ThemeConfig.js';
import { persistor, store } from './redux/store.js';
import { createStandaloneToast } from '@chakra-ui/react'


const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      
          <App />
       
        <ToastContainer />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
