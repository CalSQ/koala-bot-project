import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <Router>
    <App />
  </Router>,
  //</React.StrictMode>,
);
