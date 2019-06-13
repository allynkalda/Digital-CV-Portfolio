import React from 'react';
import { Footer, Container, Content } from 'react-bulma-components/full';

export default function FooterWeb() {
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
