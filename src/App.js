import React from 'react';
import {useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18/i18n';
import { PageProvider } from './components/page-context';

function App() {

  return (
    <PageProvider>
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
    </I18nextProvider>
    </PageProvider>
  );
}

export default App;
