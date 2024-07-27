
import logo from '../assets/symbol-bev.png';
import React, { useState } from 'react';
import '../style/components.css';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Header(){

  const [pageDisplayedLang, setpageDisplayedLang] = useState('en');

  const { t, i18n } = useTranslation();

  const location = useLocation();

  const changeLang = (lang) => {
    setpageDisplayedLang(lang);
    i18n.changeLanguage(lang);
  }

    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
         <div className="container-fluid mt-lg-3 mb-lg-3">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="bev-innovations" width="70" height="70"/>
            </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item  ms-lg-5">
                 <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}    fs-6`}>{t('home')}</Link>
               </li>
               <li className="nav-item dropdown ms-lg-4">
                 <a className="nav-link dropdown-toggle    fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   {t('Co-Packing Solutions')}
                 </a>
                 <ul className="dropdown-menu border-0 shadow-sm">
                   <li><Link to="/alcoholic" className="dropdown-item">{t('alcoholic-bev')}</Link></li>
                   <li><Link to="/non-alcoholic" className="dropdown-item">{t('nonalcohol-bev')}</Link></li>
                   <li><Link to="/water" className="dropdown-item">{t('water-bev')}</Link></li>
                 </ul>
               </li>
               <li className="nav-item ms-lg-4">
                 <Link to="/formulations" className={`nav-link ${location.pathname === '/formulations' ? 'active' : ''}    fs-6`}>{t('formulations-title')}</Link>
               </li>
               <li className="nav-item ms-lg-4">
                 <Link to="/bottling" className={`nav-link ${location.pathname === '/bottling' ? 'active' : ''}    fs-6`}>{t('bottling-tittle')}</Link>
               </li>
             </ul>
             <a className="change-lang-btn fs-5 fw-semibold px-5" href="#" onClick={() => {changeLang(pageDisplayedLang === 'en'?'fr':'en')}}>{pageDisplayedLang === "en" ? "Fr" : "En"}</a>
             <Link to="/contact-us" className="btn bg-blue rounded-0 me-lg-2" >{t('contact-us')}</Link>
           </div>
         </div>
</nav>
    );
}