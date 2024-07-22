import { useTranslation } from 'react-i18next';
export default function Alcoholic(){
    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    const { t } = useTranslation();
    return(
    <div className="card mb-3 border-0">
        <div className="row g-0">
            <div className="col-md-6">
                <img src={loadImage('whisky-bottle.png')} className="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
            </div>
             <div className="col-md-6">
               <div className="card-body">
                 <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">{t('alcoholic-bev')}</h5>
                 <p classNameName="card-text">{t('alcoholic-bev-text1')}</p>
                 <p className="card-text"><strong>{t('alcoholic-bev-title1')}</strong></p>
                 <p className="card-text">{t('alcoholic-bev-text2')}</p>
                <p className="card-text"><strong>{t('alcoholic-bev-title2')}</strong></p>
                <p className="card-text">{t('alcoholic-bev-text3')}</p>
                </div>
            </div>
        </div>
    </div>
    );
}