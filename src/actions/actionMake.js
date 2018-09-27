import { ADD_GET, DELETE_GET, TOGGLE_GET, SET_VISIBILITY_FILTER } from './actionsSort'

let GetId = 2

export const addGet = text => ({
    type: ADD_GET,
    id: GetId++,
    text
})

export const deleteGet = (id) => ({
    type: DELETE_GET,
    id: id
})

export const toggleGet = (id) => ({
    type: TOGGLE_GET,
    id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
