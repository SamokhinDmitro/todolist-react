import React from "react";
import './About.sass';
import Navigation from "../Navigation/Navigation";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const About = props => {
    return (
        <Auxiliary>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card card-white ">
                            <div className="card-body">
                                <h1 className="card-title">{props.title}</h1>
                                <hr/>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea expedita impedit nemo nisi nostrum repudiandae similique temporibus vero voluptates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Auxiliary>
    );


}

export default About;
