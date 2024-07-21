import { useTranslation } from 'react-i18next';
export default function Formulation(){

    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    const { t } = useTranslation();
    return (
        <div className="card mb-3 border-0">
        <div className="row g-0">
            <div className="col-md-6">
                <img src={loadImage('formulations.png')} className="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
            </div>
             <div className="col-md-6">
               <div className="card-body">
                 <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">{('formulations-services')}</h5>
                 <p className="card-text">{t('formulations-text1')}</p>
                 <p className="card-text"><strong>{t('formulations-sub-title1')}</strong></p>
                 <p classNameName="card-text">{t('formulations-text2')}</p>
                <p className="card-text"><strong>{t('formulations-sub-title2')}</strong></p>
                 <p className="card-text">{t('formulations-text3')}</p>
                <p className="card-text"><strong>{t('formulations-sub-title3')}</strong></p>
                <p className="card-text">{t('formulations-text4')}</p>
                </div>
            </div>
        </div>
    </div>
    );
}