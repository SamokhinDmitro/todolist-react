import React from "react";
import './Navigation.sass';
import {NavLink} from 'react-router-dom';


export default class Navigation extends React.Component{

    render() {
        return (
                <nav className="navbar navbar-dark navbar-expand-lg bg-primary navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            React TodoApplication
                        </div>
                        <ul className="navbar-nav navigation__list">
                            <li className="nav-item navigation__item">
                                <NavLink
                                    exact
                                    className="nav-link navigation__link"
                                    activeClassName={'navigation__link-active'}
                                    to="/"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item navigation__item">
                                <NavLink
                                    className="navigation__link nav-link "
                                    activeClassName={'navigation__link-active'}
                                    to="/about"
                                >About</NavLink>
                            </li>

                            <li className="nav-item navigation__item">
                                <NavLink
                                    className="nav-link navigation__link"
                                    activeStyle={{color: 'orange'}}
                                    to= {{
                                        pathname: '/contacts',
                                        hash: 'contacts'
                                    }}
                                >Contacts</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
        );
    }
}
