export default function WaterBev(){
    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 
    return (
        <div className="card mb-3 border-0">
        <div className="row g-0">
            <div className="col-md-6">
                <img src={loadImage('water-bottle.png')} className="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
            </div>
             <div className="col-md-6">
               <div className="card-body">
                 <h5 className="card-title blue-text fw-bold fs-4 pt-lg-5">Water Beverages</h5>
                 <p className="card-text"><strong>Bev-Innovations: Pure Canadian Water, Personalized for Your Brand</strong></p>
                 <p classNameName="card-text">At Bev-Innovations, our water is produced on-site, allowing customers to witness our meticulous purification process firsthand. 
                    Our comprehensive treatment process includes distillation, pre- and post-filtration, and reverse osmosis, resulting in water that is 99.9% pure and free from 
                    contaminants. Additionally, we use a special process to create "Activated Water" with enhanced antioxidant potential.</p>
                 <p className="card-text">Our mission is to provide your business with the highest quality pure Canadian water in the most attractive private-label packaging on the 
                    market, all at a cost-effective price. Our water products can be fully personalized, from bottle caps to label designs, to boost your brand awareness while 
                    promoting your products and services.</p>
                <p className="card-text">Whether you're planning to establish a global brand or need a few cases for a wedding, holiday party, or open house, Bev-Innovations will 
                    deliver top-quality water at a surprisingly competitive price. Experience the exceptional quality of water that people travel the world to find, right at your 
                    doorstep.</p>
                </div>
            </div>
        </div>
    </div>
    );
}