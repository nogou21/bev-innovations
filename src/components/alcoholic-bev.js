export default function Alcoholic(){
    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    return(
        <div className="card mb-3 border-0">
        <div className="row g-0">
    <div className="col-md-6">
        <img src={loadImage('whisky-bottle.png')} className="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
    </div>
     <div className="col-md-6">
       <div className="card-body">
         <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">Alcoholic Beverages</h5>
         <p classNameName="card-text">Our expertise spans a wide array of alcoholic beverages, including wines, distilled spirit cocktails, and more. We pride ourselves on delivering
             high-quality products tailored to your exact specifications.</p>
         <p className="card-text"><strong>Alcoholic Beverage Services</strong></p>
         <p className="card-text">With decades of experience in co-packing and manufacturing alcoholic beverages, Bev-Innovations collaborates with glass and aluminum bottle 
            companies nationwide to bring your beverage concept to life. Our team will help you determine the best packaging for your product , considering your beverage type, 
            target audience, and brand image. Whether you prefer glass or aluminum bottles, our seasoned co-packing specialists will transform your vision into reality.</p>
        <p className="card-text"><strong>Custom Flavor Formulas</strong></p>
        <p className="card-text">We assist customers in creating specialized formulas, developing packaging designs, and producing finished alcoholic beverage products for 
            consumers. Our clients value our follow-through, quick turnaround time, and competitive pricing. We ensure the protection of your product and brand through a 
            Non-Disclosure Agreement (NDA) with every client.</p>
       </div>
     </div>
        </div>
    </div>
    );
}