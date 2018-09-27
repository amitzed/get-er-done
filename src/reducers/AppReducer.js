import { combineReducers } from 'redux'
import gets from './GetReducer'
import visibilityFilter from './DoneReducer'


export default combineReducers({
  gets,
  visibilityFilter
})
