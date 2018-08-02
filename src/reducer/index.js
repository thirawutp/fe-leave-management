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
      console.log("aa", action.payload)
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
      console.log('search Reducer ', action.payload.search)
      return {
        ...state,
        search: action.payload.search
      }
    case 'SET_PROFILE':
      return {
        ...state,
        person: action.payload.person
      }
    case 'SET_ROLE':
      return {
        ...state,
        role: action.payload.role
      }

    case 'SET_STAFFID':
      return {
        ...state,
        staffId: action.payload.staffId
      }
    default:
      return state
  }
}
