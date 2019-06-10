import React from 'react';
import { Columns } from 'react-bulma-components/full';
import { Heading } from 'react-bulma-components/full';

export default function Project2() {
    return (
        <div className="big-space-top"><section>
            <Columns>
            <Columns.Column>
            <div className="project-box-left">
            <Heading size={8} renderAs="p">
            360°
            </Heading>
            <Heading className="space-top" subtitle renderAs="p">
            The mobile app allows teams to perform 360 surveys so the employees can provide constructive review of their work colleagues. The app shows graphs to visualize the results data. 
            </Heading>
            <div className="stack-list">
            <h4>The tech stack used are:</h4>
            <ul>
                <li>Mongodb</li>
                <li>Mongoose</li>
                <li>Charts API</li>
                <li>Express</li>
                <li>HTML, CSS, Javascript</li>
            </ul>
            </div>
            <h4>View repository <a href="https://github.com/allynkalda/Ironhack-Project-360">here</a>.</h4>
            <h4>View the app deployed in Heroku <a href="https://project-360.herokuapp.com/">here</a>.</h4>
            </div>
            </Columns.Column>
            <Columns.Column>
                <img src="/images/360.png"/>
            </Columns.Column>
            </Columns>
        </section></div>
    )
}
