import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Blog.css'
class Blog extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
              <div className="blog-header-bg">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h1>Blog</h1>
                    </div>
                    </div>
                </div>
              </div>  

              <div className="blog-content">
                <div className="container">
                    <div className="row">
                       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog1.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog2.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog3.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog2.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/b_n_1.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog1.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 
                    </div>
                </div>
              </div>
            </div>  
            </React.Fragment>
        );
    }
}

export default Blog;