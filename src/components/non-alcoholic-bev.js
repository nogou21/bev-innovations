export default function NonAlcoholic(){

    const loadImage = (img) => {
        return require(`../assets/${img}`);
    } 

    return(
               <div class="card mb-3 border-0">
               <div class="row g-0">
           <div class="col-md-6">
               <img src={loadImage('juice.png')} class="img-fluid rounded-start" alt="Non-Alcoholic Beverage"/>
           </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title blue-text fw-bold fs-4 pt-lg-5">Non-Alcoholic Beverages</h5>
                <p class="card-text">Bev-Innovations provides our clients with a wide selection of options for the formulation and co-packing of their premium non-alcoholic and low 
                   alcohol (up to 0.05%) spirits, wines, and ciders.Our team will work to develop your beverage products and packaging, so they meet evolving consumer preferences, 
                   market trends, and regulatory requirements. We want to work through every step of the process with you so that your flavors and products are exactly how you 
                   envisioned them before production.</p>
              </div>
            </div>
               </div>
           </div>
    );
}