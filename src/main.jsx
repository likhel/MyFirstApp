import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Redux Provider
import store from './Redux/Store.js';
// import store from './store'; // Import the Redux store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap the app with Provider */}
    
      <App />
   
  </Provider>
);

