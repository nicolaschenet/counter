import React, { Component } from 'react'

import { Grid } from 'semantic-ui-react'

import Candidate from './Candidate'

class CandidatesList extends Component {
  render() {
    const { candidates } = this.props
    return (
      <Grid columns={candidates.length} divided textAlign='center'>
        {candidates.map(candidate =>
          <Candidate key={candidate.name} candidate={candidate} />
        )}
      </Grid>
    )
  }
}

export default CandidatesList
