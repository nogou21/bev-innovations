import '../style/components.css';
import { useTranslation } from 'react-i18next';
export default function ContactUs(){
    const loadImage = (img) => {
        return require(`../assets/${img}`);
    }
    const { t } = useTranslation();
    return (
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-12 col-md-6">
              <img src={loadImage('Contact-us.png')} class="img-fluid rounded-start" alt="contact-us"/>
            </div>
            <div class="col-12 col-md-6 align-self-center">
                <h4 class="card-title blue-text fw-bolder">{t('contact-us')}</h4>
                <p className='card-text'>{t('contact-us-text1')}</p>
                <p className='card-text'>{t('contact-us-text2')}</p>
                <p className="card-text"><strong>Tel:</strong> (450) 692- 5229</p>
                <p className='card-text'><strong>{t('Address')}:</strong>254B, boul.Industriel Châteauguay, QC, J6J 4Z2, Canada</p>
            </div>
          </div>
         </div>
    );
}