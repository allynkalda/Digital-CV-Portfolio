import React from 'react';
import { Tile } from 'react-bulma-components/full';
import { Heading } from 'react-bulma-components/full';

export default function Project3() {
    return (
        <div className="project-boxes"><section>
            <Tile kind="ancestor">
                <Tile kind="parent" horizontal>
                <Tile kind="parent" horizontal>

                    <Tile renderAs="article" kind="child"  className="box" >
                    <Heading className="title is-4" renderAs="p" >Don't Kill Kenny Game</Heading>
                    <Heading className="subtitle is-6" renderAs="p">Desktop collision-based game made with Vanilla JS, HTML5 Canva, CSS</Heading>
                    <img className="project-image" src="images/dont-kill-kenny-game.png" />
                    <div className="space-top">
                    <p>See repository <a href="https://github.com/allynkalda/Ironhack-Game-Project">here</a></p>
                    <p>Play the game <a href="https://allynkalda.github.io/Ironhack-Game-Project/">here</a></p>
                    </div>
                    </Tile>
                </Tile>

                <Tile kind="parent" horizontal>
                    <Tile renderAs="article" kind="child" className="box" >
                    <Heading className="title is-4" size={8} renderAs="p">Kanye Quote Generator</Heading>
                    <Heading className="subtitle is-6" subtitle renderAs="p">Fun quote generator made with Kanye.Rest API, Vanilla JS, HTML, CSS</Heading>
                    <img className="project-image" src="images/kanye-generator.png" />
                    <div className="space-top">
                    <p>See repository <a href="https://github.com/allynkalda/Kanye-Quote-Generator-Using-JSON-API">here</a></p>
                    </div>
                    </Tile>
                </Tile>
                </Tile>
            </Tile>
        </section></div>
    )
}
