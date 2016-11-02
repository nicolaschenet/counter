import React, { Component } from 'react'

import { Grid } from 'semantic-ui-react'

import VotableCandidate from '../containers/VotableCandidate'

class CandidatesList extends Component {
  render() {
    const { candidates } = this.props
    return (
      <Grid columns={candidates.length} divided textAlign='center'>
        {candidates.map(candidate =>
          <VotableCandidate key={candidate.name} candidate={candidate} />
        )}
      </Grid>
    )
  }
}

export default CandidatesList
