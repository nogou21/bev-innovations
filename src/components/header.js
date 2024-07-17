
import logo from '../assets/symbol-bev.png';
import React, { useState } from 'react';
import '../style/components.css';

export default function Header({ onComponentChange}){

  const [active, setActive] = useState('Home');

  const changeTab = (title) =>{
       setActive(title);
       onComponentChange(title);
  }
    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
         <div className="container-fluid mt-lg-3 mb-lg-3">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="bev-innovations" width="70" height="70"/>
            </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item  ms-lg-5">
                 <a className={`nav-link ${active === 'Home' ? 'active' : ''}    fs-6`} aria-current="page" href="#" onClick={() => {changeTab('Home')}}>Home</a>
               </li>
               <li className="nav-item dropdown ms-lg-4">
                 <a className="nav-link dropdown-toggle    fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Co-Packing Solutions
                 </a>
                 <ul className="dropdown-menu border-0 shadow-sm">
                   <li><a className="dropdown-item" href="#" onClick={()=>{ changeTab('Alcoholic')}}>Alcoholic Beverages</a></li>
                   <li><a className="dropdown-item" href="#" onClick={()=>{ changeTab('NonAlcoholic')}}>Non-Alcoholic Beverages</a></li>
                   <li><a className="dropdown-item" href="#">Water Beverages</a></li>
                 </ul>
               </li>
               <li className="nav-item ms-lg-4">
                 <a className={`nav-link ${active === 'formulations' ? 'active' : ''}    fs-6`} href="#" onClick={() => {changeTab('formulations');onComponentChange('Formulations');}}>Formulations</a>
               </li>
               <li className="nav-item ms-lg-4">
                 <a className={`nav-link ${active === 'bottling' ? 'active' : ''}    fs-6`} href="#" onClick={() => {changeTab('bottling');onComponentChange('Bottling');}}>Bottling</a>
               </li>
             </ul>
             <button type="button" class="btn bg-blue rounded-0">Contact Us</button>
           </div>
         </div>
</nav>
    );
}