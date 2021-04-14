import React from "react";
import './Contacts.sass';
import Navigation from "../Navigation/Navigation";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

export default class Contacts extends React.Component{

    goHome = () => {
        //console.log(this.props);
        this.props.history.push('/');
    }

    render() {
        return (
            <Auxiliary>
                <Navigation/>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <div className="card card-white ">
                                <div className="card-body">
                                    <h1 className="card-title">Contact Page</h1>
                                    <hr/>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea expedita impedit nemo nisi nostrum repudiandae similique temporibus vero voluptates.</p>
                                </div>

                                <button className="btn btn-info" onClick={this.goHome}>Go home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}
