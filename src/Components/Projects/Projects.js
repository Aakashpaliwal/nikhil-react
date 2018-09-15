import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="project-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="custom-btn-upper">
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-info">Info</button>
                       </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Projects;