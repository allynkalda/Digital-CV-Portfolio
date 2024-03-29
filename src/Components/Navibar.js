import React, { Component } from 'react';
import { Navbar } from "react-bulma-components/full";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navibar extends Component {
    state = {
        active: false
    }

    handleClick = () => { 
        const { active } = this.state;
        this.setState({ active: !active }); 
    }

     scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    render() {
        return (
            <div>
                <Navbar color="light" fixed="top" active={this.state.active}>
                <Navbar.Brand>
                <Navbar.Item>
                <a href="#" onClick={this.scrollToTop}>
                <img src="./images/logo-allyn.png" alt="logo" />
                </a>
                </Navbar.Item>
            <Navbar.Burger
              active={this.state.active}
              onClick={this.handleClick}
            />
            </Navbar.Brand>
            <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item><a href="#" onClick={this.scrollToTop}
                                style={{ color: '#363636' }}>Home</a></Navbar.Item>
              <Navbar.Item><Link to="project-section"
                                style={{ color: '#363636' }}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={30}
                                duration= {500}>Projects</Link></Navbar.Item>
              <Navbar.Item><Link to="contact-section"
                                style={{ color: '#363636' }}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>Contact Me</Link></Navbar.Item>
            </Navbar.Container>
            </Navbar.Menu>
            </Navbar>
            </div>
        )
    }
}
