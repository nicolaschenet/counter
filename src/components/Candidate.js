import React, { Component } from 'react'

import { Button, Icon, Image, Grid, Progress, Statistic } from 'semantic-ui-react'

class Candidate extends Component {

  vote() {
    alert('voted')
  }

  render() {
    const { color, image, votes } = this.props.candidate
    return (
      <Grid.Column>
        <Image src={image} size='small' shape='circular' centered />
        <Statistic size='huge' color={color}>
          <Statistic.Value>
            {votes}
          </Statistic.Value>
          <Statistic.Label>Votes</Statistic.Label>
        </Statistic>
        <Progress percent={33} progress color={color}/>
        <Button animated basic color={color} onClick={this.vote}>
          <Button.Content visible>Vote</Button.Content>
          <Button.Content hidden>
            <Icon name='checkmark' />
          </Button.Content>
        </Button>
      </Grid.Column>
    )
  }
}

export default Candidate
