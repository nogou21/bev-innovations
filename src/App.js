import {useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

function App() {
  
  const [activePage, setActivePage] = useState('Home');
  const handlePageChange = (component) => {
    setActivePage(component);
  }

  return (
    <div className="App">
      <Header onComponentChange={handlePageChange}/>
      <Body component={activePage}/>
      <Footer/>
    </div>
  );
}

export default App;
