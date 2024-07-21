import React from 'react';
import {useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18/i18n';

function App() {
  
  const [activePage, setActivePage] = useState('Home');

  const handlePageChange = (component) => {
    setActivePage(component);
  }

  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Header onComponentChange={handlePageChange}/>
      <Body component={activePage}/>
      <Footer/>
    </div>
    </I18nextProvider>
  );
}

export default App;
