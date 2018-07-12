export const login = profile => ({
  type: 'LOGIN',
  payload: { profile }
})

export const addHistory = history => ({
  type: 'ADD_HISTORY',
  payload: { history }
})

export const addStatistics = statistics => ({
  type: 'ADD_STATISTICS',
  payload: { statistics }
})