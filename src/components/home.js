import { useTranslation } from 'react-i18next';
import { usePage } from './page-context';
export default function Home(){

    const [pageDisplayed, setPageDisplayed] = usePage();

    const loadImage = (img) => {
    return require(`../assets/${img}`);
    }
    function handleBtnClick(title){
        setPageDisplayed(title);
    }

const { t } = useTranslation();
    return (
        <div className="container-fluid home overflow-hidden body-bg">
            <div className="banner row g-0 text-center">
             <div className="col-sm-12 col-md-6 py-lg-5">
                 <h2 className="blue-text">{t('banner-title-1')}</h2>
                 <h4 className="py-lg-1">{t('banner-sub-title')}</h4>
                 <p className="py-lg-1">{t('banner-text')}</p>
                 <p className="pb-lg-3">{t('slogan')}</p>
                 <button type="button" className="btn bg-blue btn-lg rounded-0">{t('contact-us')}</button>
                </div>
            <div className="col-12 col-md-6 not-display">
                <img src={loadImage('banner-BEV.jpg')} alt="banner"/>
            </div>
            </div>
            <div className="services mt-sm-3">
                <div className="row g-3 my-lg-2">
                    <div className="col-12 col-md-4">
                        <div className="card shadow border-0" >
                        <img src={loadImage('whisky-bottles.png')} class="card-img-top" alt="alcoholic beverages" width="250" height="450"/>
                        <div class="card-body">
                          <h5 class="card-title">{t('alcoholic-bev')}</h5>
                          <a href="#" class="btn bg-blue rounded-0" onClick={() => {handleBtnClick('Alcoholic')}}>{t('learn-more')}</a>
                         </div>  
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card shadow border-0">
                            <img src={loadImage('juice.png')} class="card-img-top" alt="non-alcoholic beverages" width="250" height="450"/>
                            <div className="card-body">
                                <h5 class="card-title">{t('nonalcohol-bev')}</h5>
                                <a href="#" class="btn bg-blue rounded-0" onClick={() => {handleBtnClick('NonAlcoholic')}}>{t('learn-more')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="card shadow border-0">
                            <img src={loadImage('formulations.png')} class="card-img-top" alt="formulations" width="250" height="450"/>
                            <div className="card-body">
                                <h5 class="card-title">{t('formulations-title')}</h5>
                                <a href="#" class="btn bg-blue rounded-0" onClick={() => {handleBtnClick('Formulations')}}>{t('learn-more')}</a>
                            </div>
                        </div>
                </div>
 
                </div>
                <div className="row g-3 my-lg-2">
                    <div className="col-12 col-md-4">
                            <div className="card shadow border-0" >
                            <img src={loadImage('bottling-machine.png')} class="card-img-top" alt="test run" width="250" height="450"/>
                            <div class="card-body">
                              <h5 class="card-title">{t('test-run')}</h5>
                              <a href="#" class="btn bg-blue rounded-0" onClick={() => {handleBtnClick('Test-run')}}>{t('learn-more')}</a>
                             </div>  
                            </div>
                        </div>
                    <div className="col-12 col-md-4">
                            <div className="card shadow border-0" >
                            <img src={loadImage('water-bottle.png')} class="card-img-top" alt="water bottling" width="250" height="450"/>
                            <div class="card-body">
                              <h5 class="card-title">{t('water-bev')}</h5>
                              <a href="#" class="btn bg-blue rounded-0" onClick={() => {handleBtnClick('WaterBev')}}>{t('learn-more')}</a>
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