import React from 'react';
import { Columns } from 'react-bulma-components/full';
import { Heading } from 'react-bulma-components/full';

export default function Project1() {
    return (
        <div><section>
            <Columns>
            <Columns.Column>
                <img src="./images/parkshare.png"/>
            </Columns.Column>
            <Columns.Column>
            <div className="project-box-right">
            <Heading size={8} renderAs="p">
            Parkshare
            </Heading>
            <Heading className="space-top" subtitle renderAs="p">
            This mobile first React app allows users to see available parking spots owned by other users and for them to be able to share theirs to others.
            </Heading>
            <div className="stack-list">
            <h4>The tech stack used are:</h4>
            <ul>
                <li>React</li>
                <li>Mongodb</li>
                <li>Mongoose</li>
                <li>Google Map API</li>
                <li>Express</li>
                <li>HTML, CSS, Javascript</li>
            </ul>
            </div>
            <p>View frontend repository <a href="https://github.com/allynkalda/Park-Share-Frontend">here</a>.</p>
            <p>View backend repository <a href="https://github.com/allynkalda/Park-Share-Backend">here</a>.</p>
            <p>View the app deployed in Heroku <a href="https://park-share-app-allyn.herokuapp.com/">here</a>.</p>
            </div>
            </Columns.Column>
            </Columns>
        </section></div>
    )
}
