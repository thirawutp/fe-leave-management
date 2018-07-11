const inttialState = { }

export default (state = inttialState , action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        profile: action.payload.profile,
      }
    case 'ADD_HISTORY':
      return {
        ...state,
        history: action.payload.history
      }
    default:
      return state
  }
}
