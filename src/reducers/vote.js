import {
  TRIGGER_VOTE
} from '../const'

const initialState = {
  total: 0,
  bean: 0,
  hillary: 0,
  trump: 0
}

const vote = (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_VOTE:
      const name = action.candidateName
      return Object.assign({}, state, {
        total: state.total + 1,
        [name]: state[name] + 1
      })
    default:
      return state
  }
}

export default vote
