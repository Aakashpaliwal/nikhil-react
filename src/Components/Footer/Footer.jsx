import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
            <section class="footer">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h4>Nikhil Comforts</h4>
                    <p>All Right Reserved.</p>
                    <i class="fa fa-facebook custom-footer-icon" aria-hidden="true"></i>
                   <i class="fa fa-twitter custom-footer-icon-twitter" aria-hidden="true"></i>
                    <i class="fa fa-google-plus custom-footer-icon-google" aria-hidden="true"></i>
                    <i class="fa fa-linkedin custom-footer-icon-twitter" aria-hidden="true"></i>
                    </div>
                     <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h4>INFORMATION</h4>
                   <ul class="footer-custom-li">
                         <li>About US</li>
                         <li>Our Products</li>
                         <li>Privacy Policy</li>
                         <li>Terms &amp; Condition</li>
                         </ul>
                    </div>
                     <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h4>CATEGORIES</h4>
                   <ul class="footer-custom-li">
                         <li>HVAC</li>
                         <li>Electronics</li>
                         <li>Plumbing</li>
                         <li>Firefighting</li>
                         </ul>
                    </div>
                     <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <button type="submit" class="btn btn-primary btn-contact-footer">CONTACT US</button>
                    </div>
                </div>
                </div>
            </section>
                </footer>
          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center">logo</h2>
            </div> */}

          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="custom-footer-social text-center center-block">
             <ul className="list-inline">
                <li className="list-inline-item">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-youtube" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                </li>
                <li className="list-inline-item">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                </li>

            </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>Copyright &copy; 2018.All Rights Reserved.Designed By <strong>NEO404</strong></p>
          </div> */}


        

    {/* end foter */}
      </div>
    )
  }
}

export default Footer
