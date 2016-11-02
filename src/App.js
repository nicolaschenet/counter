import React, { Component } from 'react'
import {
  Container,
  Header,
  Segment
} from 'semantic-ui-react'

import CandidatesList from './components/CandidatesList'

class App extends Component {
  render() {
    const candidates = [{
      name: 'hillary',
      image: 'http://i.imgur.com/KkzJL9O.jpg',
      color: 'blue',
      votes: 42
    }, {
      name: 'trump',
      image: 'http://afflictor.com/wp-content/uploads/2012/09/dt.jpg',
      color: 'red',
      votes: 42
    }, {
      name: 'bean',
      image: 'http://lefauxrions.weebly.com/uploads/8/3/3/2/83320440/5de892c3-5637-4fcd-88d0-edaaab01063c-215-0000000240e3eb05.png',
      color: 'teal',
      votes: 42
    }]
    return (
      <Container textAlign='center'>
        <Segment.Group raised>
          <Segment>
            <Header as='h1'>
              Who will rule the world ?
              <Header.Subheader>
                Hint: one is clearly better...
              </Header.Subheader>
            </Header>
          </Segment>
          <Segment id='counter'>
            <CandidatesList candidates={candidates} />
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}

export default App;
