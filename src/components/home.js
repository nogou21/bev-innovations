import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Home(){


    const loadImage = (img) => {
    return require(`../assets/${img}`);
    }

const { t } = useTranslation();
    return (
        <div className="container home overflow-hidden my-5">
            <div className="banner row g-0 text-center my-5">
             <div className="col-sm-12 col-md-6 py-lg-5">
                 <h2 className="blue-text">{t('banner-title-1')}</h2>
                 <h4 className="py-lg-1">{t('banner-sub-title')}</h4>
                 <p className="py-lg-1">{t('banner-text')}</p>
                 <p className="pb-lg-3">{t('slogan')}</p>
                 <Link to="/contact-us" className="btn bg-blue btn-lg rounded-0">{t('contact-us')}</Link>
            </div>
            <div className="col-12 col-md-6 not-display">
                <img src={loadImage('Banner-BEV.png')} class="img-fluid"  alt="banner"/>
            </div>
            </div>
            <div className="services mt-sm-3">
                <div className="row g-3 my-lg-2">
                    <div className="col-12 col-md-4">
                        <div className="card shadow border-0" >
                        <img src={loadImage('wine-bottle-1.jpg')} class="card-img-top img-fluid" alt="alcoholic beverages"/>
                        <div class="card-body">
                          <h5 class="card-title">{t('alcoholic-bev')}</h5>
                          <Link to="/alcoholic" className="btn bg-blue rounded-0 my-lg-4">{t('learn-more')}</Link>
                         </div>  
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card shadow border-0">
                            <img src={loadImage('cans-imgs-2.jpg')} class="card-img-top img-fluid" alt="non-alcoholic beverages"/>
                            <div className="card-body">
                                <h5 class="card-title">{t('nonalcohol-bev')}</h5>
                                <Link to="/non-alcoholic" className="btn bg-blue rounded-0 my-lg-4">{t('learn-more')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="card shadow border-0">
                            <img src={loadImage('formulation-1.jpeg')} class="card-img-top img-fluid" alt="formulation"/>
                            <div className="card-body">
                                <h5 class="card-title">{t('formulations-title')}</h5>
                                <Link to="/formulations" className="btn bg-blue rounded-0 my-lg-4">{t('learn-more')}</Link>
                            </div>
                        </div>
                </div>
 
                </div>
                <div className="row g-3 my-lg-2 my-5">
                    <div className="col-12 col-md-4">
                            <div className="card shadow border-0" >
                            <img src={loadImage('bottling-machine.png')} class="card-img-top fluid-img" alt="test run"/>
                            <div class="card-body">
                              <h5 class="card-title">{t('test-run')}</h5>
                              <Link to="/test-run" className="btn bg-blue rounded-0 my-lg-4">{t('learn-more')}</Link>
                             </div>  
                            </div>
                        </div>
                    <div className="col-12 col-md-4">
                            <div className="card shadow border-0" >
                            <img src={loadImage('bottle-img-1.jpg')} class="card-img-top img-fluid" alt="water bottling"/>
                            <div class="card-body">
                              <h5 class="card-title">{t('water-bev')}</h5>
                              <Link to="/water" className="btn bg-blue rounded-0 my-lg-4">{t('learn-more')}</Link>
                             </div>  
                            </div>
                        </div>    

                </div>
            </div>
            <div className="bottling-section">
                <div className="row g-3 my-lg-2"></div>
            </div>
        </div>
    );
}