export default function Formulation(){

    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    return (
        <div className="card mb-3 border-0">
        <div className="row g-0">
            <div className="col-md-6">
                <img src={loadImage('formulations.png')} className="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
            </div>
             <div className="col-md-6">
               <div className="card-body">
                 <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">Formulation Services</h5>
                 <p className="card-text">Whether you need development, formulation, flavoring, or manufacturing, Bev-Innovations has you covered.</p>
                 <p className="card-text"><strong>Alcoholic Beverage Formulation Services.</strong></p>
                 <p classNameName="card-text">Formulating a successful alcoholic beverage requires expertise. Our specialists will work with you to create a unique flavor profile 
                    that stands out. We also offer enhancement services for existing recipes to improve their quality and taste.</p>
                <p className="card-text"><strong>Custom Flavor Formulas</strong></p>
                 <p className="card-text">Developed by our team of Food & Beverage Scientists.</p>
                 <p className="card-text"><strong>Quality Improvement</strong></p>
                <p className="card-text">Enhancements for existing recipes to ensure market success.</p>
                </div>
            </div>
        </div>
    </div>
    );
}