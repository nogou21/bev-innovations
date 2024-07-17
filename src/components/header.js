
export default function header(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid mt-lg-3 mb-lg-3">
            <a class="navbar-brand" href="#">
              <img src="" alt="bev-innovations" width="30" height="24"/>
            </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item  ms-lg-5">
                 <a className="nav-link active" aria-current="page" href="#">Home</a>
               </li>
               <li className="nav-item dropdown ms-lg-4">
                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Co-Packing Solutions
                 </a>
                 <ul className="dropdown-menu border-0 shadow-sm">
                   <li><a className="dropdown-item" href="#">Alcoholic Beverages</a></li>
                   <li><a className="dropdown-item" href="#">Non-Alcoholic Beverages</a></li>
                   <li><a className="dropdown-item" href="#">Water Co-packing</a></li>
                 </ul>
               </li>
               <li className="nav-item ms-lg-4">
                 <a className="nav-link" href="#">Formulations</a>
               </li>
               <li className="nav-item ms-lg-4">
                 <a className="nav-link" href="#">Bottling</a>
               </li>
             </ul>
             <button type="button" class="btn btn-primary rounded-0">Contact Us</button>
           </div>
         </div>
</nav>
    );
}