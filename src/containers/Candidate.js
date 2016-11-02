import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { voteFor } from '../actions/vote'
import Candidate from '../components/Candidate'

const mapStateToProps = state => ({ vote: state.vote })
const mapDispatchToProps = dispatch => bindActionCreators({ voteFor }, dispatch)

const VotableCandidate = connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidate)

export default VotableCandidate
