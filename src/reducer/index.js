const inttialState = {}

export default (state = inttialState, action) => {
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
    case 'ADD_STATISTICS':
      return {
        ...state,
        statistics: action.payload.statistics
      }
    default:
      return state
  }
}
