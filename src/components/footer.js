export default function footer(){

    return (
        <div className="footer mt-lg-5 bg-body-tertiary overflow-hidden">
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <img src="..." class="card-img-top" alt="..."/>
                </div>
                <div className="col-12 col-md-3">
                    <ul className="list-group-flush border-0">
                      <li class="list-group-item text-start fw-bold">Services</li>
                      <li class="list-group-item text-start">Alcoholic Beverages</li>
                      <li class="list-group-item text-start">Non-Alcoholic Beverages</li>
                      <li class="list-group-item text-start">Formulations</li>
                      <li class="list-group-item text-start">Test Runs</li>
                      <li class="list-group-item text-start">Water Bottling</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                <ul className="list-group-flush border-0">
                      <li class="list-group-item text-start fw-bold">Pages</li>
                      <li class="list-group-item text-start">Home</li>
                      <li class="list-group-item text-start">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}