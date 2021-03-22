import React from "react";
import map from "../common/assets/map.png"
function Reach() {
  return (
    <div>
        <div className="timeline mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="story-text">
              <div className="heading">
                <h2>Our Reach</h2>
              </div>
              <p>
                In keeping with its philosophy of 'Real Work Real Change', Smile
                Foundation ,<b> an NGO in Delhi </b>, India to support the underserved,
                has taken its intervention into the interiors of India, reaching
                the unreached in the remotest of rural areas and urban slums
                with our services and making this helping foundation in India,
                the best NGO in India.
              </p>
            </div>
          </div>
          <div className="col-md-5">
                <div className="img-wrap">
              <img src={map} alt="map" className="map-img img-responsive" />
              </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Reach;
