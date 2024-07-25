import { useTranslation } from 'react-i18next';
export default function NonAlcoholic(){

    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    const { t } = useTranslation();
    return(
        <div class="card mb-3 border-0">
         <div class="row g-0">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
               <img src={loadImage('cans-imgs-1.jpg')} class="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
           </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title blue-text fw-bold fs-4 pt-lg-5">{t('nonalcohol-bev')}</h5>
                <p class="card-text">{t('non-alcoholic-text')}</p>
              </div>
            </div>
               </div>
           </div>
    );
}