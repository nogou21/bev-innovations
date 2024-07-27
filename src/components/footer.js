import logo from '../assets/symbol-bev.png';
import '../style/components.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer(){
    const { t } = useTranslation();

    return (
        <div className="footer mt-lg-5 overflow-hidden">
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <img src={logo} class="position-relative top-5 start-5 mt-lg-3 me-lg-5 not-display" alt="bev-innovations" width="70" height="70"/>
                </div>
                <div className="col-12 col-md-3">
                    <ul className="list-group-flush list-decoration border-0 mt-lg-2">
                      <li class="list-group-item text-start fw-bold blue-text">Services</li>
                      <li><Link to="/alcoholic" className="list-group-item text-start mt-lg-1">{t('alcoholic-bev')}</Link></li>
                      <li><Link to='/non-alcoholic' className="list-group-item text-start">{t('nonalcohol-bev')}</Link></li>
                      <li><Link to="/formulations" className="list-group-item text-start">{t('formulations-title')}</Link></li>
                      <li><Link to="/test-run" className="list-group-item text-start">{t('test-run')}</Link></li>
                      <li><Link to="/water"  className="list-group-item text-start">{t('water-bev')}</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                <ul className="list-group-flush border-0  mt-lg-2">
                      <li class="list-group-item text-start fw-bold blue-text">Contact</li>
                      <li class="list-group-item text-start mt-lg-1">Tel: (450) 692- 5229</li>
                      <li class="list-group-item text-start mt-lg-1">Email: info@bev-innovations.com</li>
                      <li class="list-group-item text-start">{t('Address')}: 254B, boul.Industriel Châteauguay, QC, J6J 4Z2, Canada</li>
                    </ul>
                </div>
            </div>
            <div className='row g-3'>
                <div className='col-12 col-md-2'></div>
                <div className='col-12 col-md-8'>
                    <hr className='bg-blue'/>
                    <p className='blue-text'>© 2024 Bev-Innovations.{t('rights-reserved')}</p>
                </div>
                <div className='col-12 col-md-2'></div>
            </div>
        </div>
    );
}