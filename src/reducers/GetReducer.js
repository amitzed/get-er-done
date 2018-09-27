import { ADD_GET, DELETE_GET, TOGGLE_GET } from '../actions/actionsSort'

const INITIAL_DATA = []

const GetReducer = (state=INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_GET:
    return [
      ...state,{
        id: action.id,
        text: action.text,
        completed: false,
      }
    ]
    case TOGGLE_GET:
    return state.map(get =>
    (get.id === action.id)
    ? {...get, completed: !get.completed}
    : get
    )
    case DELETE_GET:

    const numIndex = parseInt(action.id)
    return state.filter(get => get.id !== numIndex);
    default:
    return state
  }
}

export default GetReducer
