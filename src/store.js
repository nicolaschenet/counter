import { createStore, compose } from 'redux'

import reducers from './reducers'

export default function configureStore (history, initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  return store
}
