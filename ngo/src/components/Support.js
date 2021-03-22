import React from "react";
import img3 from "../common/assets/img3.jpg";
import Reach from "./Reach";
function Support() {
  return (
    <div>
      <div className="support">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <figure>
                <img src={img3} alt="" className="support-img img-responsive" />
              </figure>
            </div>
            <div className="col-md-7">
              <div className="support-text">
                <h2>Support Us</h2>
                <p>
                  Smile Foundation has been certified as being equivalent to a
                  U.S. public charity by NGOSource. NGOsource, a project of the
                  Council on Foundations and TechSoup, helps streamline
                  international giving by evaluating whether a non-U.S.
                  organization is the equivalent of a U.S. public charity,
                  through the process of equivalency determination (ED).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reach />
    </div>
  );
}

export default Support;
