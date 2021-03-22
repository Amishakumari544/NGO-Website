import React from "react";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import ngo from "../common/assets/ngo.png";
import mail from "../common/assets/mail.png";
import cinema from "../common/assets/cinema.png";
function footer() {
  return (
    <div>
      <Router>
        <div className="footer">
          <h2 className="ml-5">Get Involved</h2>
          <footer>
            <div className="involved">
              <div className="container">
                <div className="">
                  <div className="row">
                    <div className="col">
                      <img src={ngo} className="involved-img" alt="ngo" />
                      <a href=""> Donate </a>
                    </div>
                    <div className="col">
                      <img src={mail} className="involved-img" alt="signup" />
                      <a href="/signup">Signup </a>
                    </div>
                    <div className="col">
                      <img
                        src={cinema}
                        className="involved-img"
                        alt="audience"
                      />
                      <a href=""> Spread the World </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-text">
              <p className="text-center">
                <a href="http://www.linkedin.com/in/amisha-kumari-936a37168/">
                  Amisha Kumari
                </a>
              </p>
              <p className="text-center">
                <a href="https://www.thesparksfoundationsingapore.org/">
                  The Sparks Foundation
                </a>
              </p>
              <div class="text-center center-block">
                <p class="txt-railway">- Connect with us -</p>
                <br />
                <div className="social-icon">
                  <a href="https://www.facebook.com/">
                    <i class="fa fa-facebook-square fa-3x social"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i class="fa fa-twitter-square fa-3x social"></i>
                  </a>
                  <a href="https://plus.google.com/">
                    <i class="fa fa-google-plus-square fa-3x social"></i>
                  </a>
                  <a href="mailto:bootsnipp@gmail.com">
                    <i class="fa fa-envelope-square fa-3x social"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default footer;
