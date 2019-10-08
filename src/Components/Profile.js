import React from 'react';
import { Hero } from "react-bulma-components/full";
import { Heading } from "react-bulma-components/full";

export default function Profile() {
    return (
        <div><section>
        <Hero color="light" size="medium">
        <Hero.Body>
        <Heading className="title is-1" renderAs="p">
        Allyn Alda
        </Heading>
        <Heading subtitle renderAs="p">
        Fullstack Web Developer
         </Heading>
        <div>
            <a href="https://www.linkedin.com/in/allyn-alda/"><img className="icon-image" alt="linkedin" src="./images/linkedin.png" /></a>
            <a href="https://medium.com/@allynak"><img className="icon-image" alt="medium" src="./images/medium.png" /></a>
            <a href="https://github.com/allynkalda"><img className="icon-image" alt="github" src="./images/github.png" /></a>
        </div>
        </Hero.Body>
        </Hero>
        </section></div>
    )
}
