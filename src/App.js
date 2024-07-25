import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18/i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Bottling from './components/bottling';
import Formulations from './components/formulations';
import NonAlcoholic from './components/non-alcoholic-bev';
import Water from './components/water-bev';
import TestRun from './components/test-run';
import Alcoholic from './components/alcoholic-bev';
import ContactUs from './components/contact-us';

function App() {

  return (
  <div className='App'>
      <Router>
      <I18nextProvider i18n={i18n}>
      <Header/>
      <Routes>
       <Route path='/' Component={Home}/>
       <Route path='/formulations' Component={Formulations}/>
       <Route path='/non-alcoholic' Component={NonAlcoholic}/>
       <Route path='/alcoholic' Component={Alcoholic}/>
       <Route path='/water' Component={Water}/>
       <Route path='/test-run' Component={TestRun}/>
       <Route path='/bottling' Component={Bottling}/>
       <Route path='/contact-us' Component={ContactUs}/>
      </Routes>
      <Footer/>
      </I18nextProvider>
    </Router>
  </div>
  );
}

export default App;
