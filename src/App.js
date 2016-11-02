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
    const bean = 'http://lefauxrions.weebly.com/uploads/8/3/3/2/83320440/5de892c3-5637-4fcd-88d0-edaaab01063c-215-0000000240e3eb05.png'
    const hillary = 'http://i.imgur.com/KkzJL9O.jpg'
    const trump = 'http://afflictor.com/wp-content/uploads/2012/09/dt.jpg'
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
            <Grid columns={3} divided textAlign='center'>
              <Grid.Column>
                <Image src={trump} size='small' shape='circular' centered />
                <Statistic size='huge' color='red'>
                  <Statistic.Value>
                    42
                  </Statistic.Value>
                  <Statistic.Label>Votes</Statistic.Label>
                </Statistic>
                <Progress percent={33} progress color='red'/>
                <Button animated basic color='red'>
                  <Button.Content visible>Vote</Button.Content>
                  <Button.Content hidden>
                    <Icon name='checkmark' />
                  </Button.Content>
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Image src={hillary} size='small' shape='circular' centered />
                <Statistic size='huge' color='blue'>
                  <Statistic.Value>
                    42
                  </Statistic.Value>
                  <Statistic.Label>Votes</Statistic.Label>
                </Statistic>
                <Progress percent={33} progress color='blue'/>
                <Button animated basic color='blue'>
                  <Button.Content visible>Vote</Button.Content>
                  <Button.Content hidden>
                    <Icon name='checkmark' />
                  </Button.Content>
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Image src={bean} size='small' shape='circular' centered />
                <Statistic size='huge' color='teal'>
                  <Statistic.Value>
                    42
                  </Statistic.Value>
                  <Statistic.Label>Votes</Statistic.Label>
                </Statistic>
                <Progress percent={33} progress color='teal'/>
                <Button animated basic color='teal'>
                  <Button.Content visible>Vote</Button.Content>
                  <Button.Content hidden>
                    <Icon name='checkmark' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}

export default App;
