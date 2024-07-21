
import logo from '../assets/symbol-bev.png';
import React, { useState } from 'react';
import '../style/components.css';
import { useTranslation } from 'react-i18next';


export default function Header({ onComponentChange}){

  const [active, setActive] = useState('Home');

  const [activeLang, setActiveLang] = useState('');

  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang)
  }

  const changeTab = (title) =>{
       setActive(title);
       onComponentChange(title);
  }
    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
         <div className="container-fluid mt-lg-3 mb-lg-3">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="bev-innovations" width="70" height="70" onClick={() => {changeTab('Home')}}/>
            </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item  ms-lg-5">
                 <a className={`nav-link ${active === 'Home' ? 'active' : ''}    fs-6`} aria-current="page" href="#" onClick={() => {changeTab('Home')}}>{t('home')}</a>
               </li>
               <li className="nav-item dropdown ms-lg-4">
                 <a className="nav-link dropdown-toggle    fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   {t('Co-Packing Solutions')}
                 </a>
                 <ul className="dropdown-menu border-0 shadow-sm">
                   <li><a className="dropdown-item" href="#" onClick={()=>{ changeTab('Alcoholic')}}>{t('alcoholic-bev')}</a></li>
                   <li><a className="dropdown-item" href="#" onClick={()=>{ changeTab('NonAlcoholic')}}>{t('nonalcohol-bev')}</a></li>
                   <li><a className="dropdown-item" href="#" onClick={()=>{ changeTab('WaterBev')}}>{t('water-bev')}</a></li>
                 </ul>
               </li>
               <li className="nav-item ms-lg-4">
                 <a className={`nav-link ${active === 'Formulations' ? 'active' : ''}    fs-6`} href="#" onClick={() => {changeTab('Formulations')}}>{t('formulations-title')}</a>
               </li>
               <li className="nav-item ms-lg-4">
                 <a className={`nav-link ${active === 'Bottling' ? 'active' : ''}    fs-6`} href="#" onClick={() => {changeTab('Bottling')}}>{t('bottling-tittle')}</a>
               </li>
             </ul>
             <a className="change-lang-btn fs-5 fw-semibold px-5" href="#" onClick={() => {changeLang(activeLang === 'en'?'fr':'en')}}>{activeLang === "en" ? "Fr" : "En"}</a>
             <button type="button" className="btn bg-blue rounded-0 me-lg-2" onClick={() => {changeTab('Contact-us')}}>{t('contact-us')}</button>
           </div>
         </div>
</nav>
    );
}