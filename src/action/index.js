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
