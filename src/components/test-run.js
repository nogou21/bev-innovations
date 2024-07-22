import { useTranslation } from 'react-i18next';
export default function TestRun(){

    const { t } = useTranslation();
    const loadImage = (img) => {
        return require(`../assets/${img}`);
        }

    return(
        <div class="card mb-3 border-0">
        <div class="row g-0">
           <div class="col-md-6">
              <img src={loadImage('juice.png')} class="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
          </div>
           <div className="col-md-6">
             <div className="card-body">
               <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">{t('test-run-bev')}</h5>
               <p className="card-text">{t('test-run-text1')}</p>
               <p className="card-text">{t('test-run-text2')}</p>
               <p className="card-text">{t('test-run-text3')}</p>
               <p className="card-text">{t('test-run-text4')}</p>
               <p className="card-text">{t('test-run-text5')}</p>
             </div>
           </div>
              </div>
          </div>
    );
}