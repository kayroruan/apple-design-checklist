import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/Menu'
import Content from '../components/Content';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Content></Content>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;