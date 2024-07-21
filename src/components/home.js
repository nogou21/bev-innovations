
export default function Home(){

const loadImage = (img) => {
    return require(`../assets/${img}`);
}
    return (
        <div className="container-fluid home overflow-hidden body-bg">
            <div className="banner row g-0 text-center">
             <div className="col-sm-12 col-md-6 py-lg-5">
                 <h2 className="blue-text">BEV-INNOVATIONS | BEVERAGE CONTRACT MANUFACTURING</h2>
                 <h4 className="py-lg-1">Experience the Difference with Bev-Innovations</h4>
                 <p className="py-lg-1">Bev-Innovations leverages decades of expertise in co-packing and contract manufacturing for both alcoholic and non-alcoholic beverages. 
                     Partner with a leader in the beverage industry to turn your ideas into reality.</p>
                 <button type="button" className="btn bg-blue btn-lg rounded-0">Contact Us</button>
                </div>
            <div className="col-12 col-md-6 ">
                <img src={loadImage('banner-BEV.jpg')} alt="banner"/>
            </div>
            </div>
            <div className="services">
                <div className="row g-3 my-lg-2">
                    <div className="col-12 col-md-4">
                        <div className="card shadow border-0" >
                        <img src={loadImage('whisky-bottles.png')} class="card-img-top" alt="alcoholic beverages" width="250" height="450"/>
                        <div class="card-body">
                          <h5 class="card-title">Alcoholic Beverages</h5>
                          <a href="#" class="btn bg-blue rounded-0">Learn More</a>
                         </div>  
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card shadow border-0">
                            <img src={loadImage('juice.png')} class="card-img-top" alt="non-alcoholic beverages" width="250" height="450"/>
                            <div className="card-body">
                                <h5 class="card-title">Non-Alcoholic Beverages</h5>
                                <a href="#" class="btn bg-blue rounded-0">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="card shadow border-0">
                            <img src={loadImage('formulations.png')} class="card-img-top" alt="formulations" width="250" height="450"/>
                            <div className="card-body">
                                <h5 class="card-title">Formulations</h5>
                                <a href="#" class="btn bg-blue rounded-0">Learn More</a>
                            </div>
                        </div>
                </div>
 
                </div>
                <div className="row g-3 my-lg-2">
                    <div className="col-12 col-md-4">
                            <div className="card shadow border-0" >
                            <img src={loadImage('bottling-machine.png')} class="card-img-top" alt="test run" width="250" height="450"/>
                            <div class="card-body">
                              <h5 class="card-title">Test Runs</h5>
                              <a href="#" class="btn bg-blue rounded-0">Learn More</a>
                             </div>  
                            </div>
                        </div>
                    <div className="col-12 col-md-4">
                            <div className="card shadow border-0" >
                            <img src={loadImage('water-bottle.png')} class="card-img-top" alt="water bottling" width="250" height="450"/>
                            <div class="card-body">
                              <h5 class="card-title">Water Bottling</h5>
                              <a href="#" class="btn bg-blue rounded-0">Learn More</a>
                             </div>  
                            </div>
                        </div>    

                </div>
            </div>
            <div className="bottling-section">
                <div className="row g-3 my-lg-2"></div>
            </div>
        </div>
    );
}