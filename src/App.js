import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Progress,
  Segment,
  Statistic
} from 'semantic-ui-react'

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
            <Grid columns={candidates.length} divided textAlign='center'>
              {candidates.map(candidate => {
                const { color, image, votes } = candidate
                return (
                  <Grid.Column>
                    <Image src={candidate.image} size='small' shape='circular' centered />
                    <Statistic size='huge' color={color}>
                      <Statistic.Value>
                        {votes}
                      </Statistic.Value>
                      <Statistic.Label>Votes</Statistic.Label>
                    </Statistic>
                    <Progress percent={33} progress color={color}/>
                    <Button animated basic color={color}>
                      <Button.Content visible>Vote</Button.Content>
                      <Button.Content hidden>
                        <Icon name='checkmark' />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}

export default App;
