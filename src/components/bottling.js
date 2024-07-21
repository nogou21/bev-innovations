import { useTranslation } from 'react-i18next';
export default function Bottling(){
    const loadImage = (img) => {
        return require(`../assets/${img}`);
    }
    const { t } = useTranslation();
    return (
        <div className='container-fluid overflow-hidden body-bg'>
            <div className="row g-3 text-start px-lg-4 pt-lg-5">
        <div className="col-12 col-md-12">
            <h2 className="blue-text">{t('bottling-title')}</h2>
            <h5>{t('bottling-sub-title1')}</h5>
            <p>{t('bottling-text1')}</p>
            <p><strong>{t('bottling-sub-title2')}</strong></p>
            <p>{t('bottling-text2')}</p>
        </div>
        <div className="col-12 col-md-3">
            <img src={loadImage('aluminium-bottles.png')} class="card-img-top" alt="aluminium-bottles"/>
        </div>
        <div className="col-12 col-md-3">
        <ul class="border-0 text-start">
            <li class="list-group-item blue-text py-lg-2"><strong>{t('packaging-options')}</strong></li>
            <li class="list-group-item">{t('glass-bottles')}</li>
            <li class="list-group-item">{t('pet-bottles')}</li>
            <li class="list-group-item">{t('hdpe-bottles')}</li>
            <li class="list-group-item">{t('aluminium-bottles')}</li>
            <li class="list-group-item">{t('shot-bottles')}</li>
            <li class="list-group-item">Multi-Packs</li>
            <li class="list-group-item">{t('and-more')}</li>
        </ul>
        </div>
        <div className="col-12 col-md-3">
        <img src={loadImage('wine-bottles.png')} class="card-img-top" alt="formulations"/>
        </div>
        <div className="col-12 col-md-3">
        <ul class="border-0">
                <li class="list-group-item blue-text py-lg-2"><strong>{t('product-types')}</strong></li>
            <li class="list-group-item">{t('alcoholic-bev-list')}</li>
            <li class="list-group-item">{t('beverage-enhancers')}</li>
            <li class="list-group-item">{t('coffee-drink')}</li>
            <li class="list-group-item">{t('energy-drinks')}</li>
            <li class="list-group-item">{t('workout-bev')}</li>
            <li class="list-group-item">{t('tea-water')}</li>
            <li class="list-group-item">{t('fruit-juice')}</li>
            <li class="list-group-item">{t('functional-drink')}</li>
            <li class="list-group-item">{t('herbal-drinks')}</li>
            <li class="list-group-item">{t('protein-drinks')}</li>
            <li class="list-group-item">{t('rtd-protein')}</li>
            <li class="list-group-item">{t('vitamin')}</li>
            <li class="list-group-item">{t('last-one')}</li>
        </ul>
        </div>
     </div>
        </div>
        );
}