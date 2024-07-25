import { useTranslation } from 'react-i18next';
export default function WaterBev(){
    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    const { t } = useTranslation();
    return (
        <div className="card mb-3 border-0">
        <div className="row g-0">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={loadImage('bottle-img-2.jpg')} className="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
            </div>
             <div className="col-md-6">
               <div className="card-body">
                 <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">{t('water-bev')}</h5>
                 <p className="card-text"><strong>{t('water-bev-sub-title')}</strong></p>
                 <p classNameName="card-text">{t('water-bev-text-section1')}</p>
                 <p className="card-text">{t('water-bev-text-section2')}</p>
                <p className="card-text">{t('water-bev-text-section3')}</p>
                </div>
            </div>
        </div>
    </div>
    );
}