import React, { Component } from 'react';
import { Footer } from 'react-bulma-components/full';
import { Container } from 'react-bulma-components/full';
import { Content } from 'react-bulma-components/full';

export default class FooterWeb extends Component {
    render() {
        return (
            <div>

        <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Digital CV and Portfolio</strong> by Allyn Alda.
            </p>
          </Content>
        </Container>
        </Footer>

            </div>
        )
    }
}
