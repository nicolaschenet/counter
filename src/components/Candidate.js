import React, { Component } from 'react'

import { Button, Icon, Image, Grid, Progress, Statistic } from 'semantic-ui-react'

class Candidate extends Component {

  constructor(props) {
    super(props)
    this.vote = this.vote.bind(this)
  }

  vote() {
    const { candidate, voteFor } = this.props
    voteFor(candidate.name)
  }

  render() {
    const { color, image, name } = this.props.candidate
    const votes = this.props.vote[name]
    const { total } = this.props.vote
    const percent = total ? Math.round((votes / total) * 100) : total
    return (
      <Grid.Column>
        <Image src={image} size='small' shape='circular' centered />
        <Statistic size='huge' color={color}>
          <Statistic.Value>
            {`${votes}`}
          </Statistic.Value>
          <Statistic.Label>
            {`Vote${votes > 1 ? 's' : ''}`}
          </Statistic.Label>
        </Statistic>
        <Progress percent={percent} progress color={color}/>
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
