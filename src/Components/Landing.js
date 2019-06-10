import React, { Component } from 'react';
import { Section } from "react-bulma-components/full";

import Navibar from './Navibar';
import Profile from './Profile';
import ProjectTitle from './ProjectTitle';
import Project1 from './Project1';
import Button1 from './Button1';
import Project2 from './Project2';
import Project3 from './Project3';
import Contact from './Contact';
import FooterWeb from './FooterWeb';

export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showProjects: false,
        }
    }

    toggleButton = () => {
        this.setState({ showProjects: !this.state.showProjects })
    }

    render() {
        return (
            <div>
                <Navibar />
                <Profile />
                <ProjectTitle />
                <Section title="Project Section" id="project-section" />
                <Project1 />
                <Project2 />
                <Button1 toggleButton={this.toggleButton} show={this.state.showProjects} />
                { this.state.showProjects ? <Project3 /> : null }  
                <Section title="Contact Section" id="contact-section" /> 
                <Contact />
                <FooterWeb />
            </div>
        )
    }
}
