import {
  TRIGGER_VOTE
} from '../const'

export function voteFor (candidateName) {
  return {
    type: TRIGGER_VOTE,
    candidateName
  }
}
