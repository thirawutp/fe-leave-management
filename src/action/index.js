export const login = profile => ({
  type: 'LOGIN',
  payload: { profile }
})

export const addHistory = history => ({
  type: 'ADD_HISTORY',
  payload: { history }
})



export const addpudding = data => ({
  type: 'ADD_PUDDING',
  payload: { data }
})

export const addStatistics = statistics => ({
  type: 'ADD_STATISTICS',
  payload: { statistics }
})


export const addApprove = approve => ({
  type: 'ADD_APPROVE',
  payload: { approve }
})

export const addTable = table => ({
  type: 'ADD_TABLE',
  payload: { table }
})

export const searchInTable = search => ({
  type: 'SEARCH_IN_TABLE',
  payload: { search }
})

export const setProfile = person => ({
  type: 'SET_PROFILE',
  payload: { person }
})



export const setStaffId = staffId => ({
  type: 'SET_STAFFID',
  payload: { staffId }
})


export const setRole = role => ({
  type: 'SET_ROLE',
  payload: { role }
})



