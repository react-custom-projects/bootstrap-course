import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {bComponents} from '../../import-all-bootstrap-components';

import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <bComponents.Navbar bg="light" expand="lg">
                <bComponents.Navbar.Brand>
                    <NavLink to="/" exact>CodeLif</NavLink>
                </bComponents.Navbar.Brand>
                <bComponents.Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <bComponents.Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <bComponents.Nav >
                        <LinkContainer to="/" exact>
                            <p className="nav-link">Home</p>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <p className="nav-link">About</p>
                        </LinkContainer>
                        <LinkContainer to="/news">
                            <p className="nav-link">News</p>
                        </LinkContainer>
                    </bComponents.Nav>
                </bComponents.Navbar.Collapse>
            </bComponents.Navbar>
        );
    }
}

export default CustomNavbar;