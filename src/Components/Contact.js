import React from 'react';
import { Heading, Button, Container } from 'react-bulma-components/full';

export default function Contact() {
        return (
            <div>
                <Container className="contact-space">
                    <p className="bd-notification is-success">
                        <Heading size={5} renderAs="p">
                        Feel free to contact me at:
                        </Heading>
                        <Heading subtitle renderAs="p">
                        allyn.alda@gmail.com
                        </Heading>
                    </p>
                    <div className="button-space">
                    <a href="./images/allyn-alda-cv.pdf" download><Button color="danger">
                        Download CV
                    </Button></a>
                    </div>
                </Container>
            </div>
        )
    }
