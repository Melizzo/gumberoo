const initialState = [];

export const setStudentsResults = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENTS_RESULTS':
    return [...state, ...action.results]
  case 'RESET_STUDENTS_RESULTS':
    return initialState
  default: 
    return state
  }
}