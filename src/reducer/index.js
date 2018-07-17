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
    case 'ADD_PUDDING':
      return {
        ...state,
        data: action.payload.data
      }

    case 'ADD_STATISTICS':
      return {
        ...state,
        statistics: action.payload.statistics
      }

    case 'ADD_APPROVE':
      return {
        ...state,
        approve: action.payload.approve
      }

    case 'ADD_TABLE':
      return {
        ...state,
        table: action.payload.table
      }

    case 'SEARCH_IN_TABLE':
      return {
        ...state,
        search: action.payload.search
      }
    default:
      return state
  }
}
