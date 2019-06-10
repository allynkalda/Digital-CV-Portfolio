import React from 'react';
import { Container } from 'react-bulma-components/full';
import { Heading } from 'react-bulma-components/full';

export default function ProjectTitle() {
    return (
        <div><section>
        <Container>
          <div className="project-title">
          <Heading size={10} renderAs="p">
            My Projects
          </Heading>
          </div>
        </Container>
        </section></div>
    )
}
