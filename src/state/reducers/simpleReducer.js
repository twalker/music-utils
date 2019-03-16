export default (state = {}, action) => {
  switch (action.type) {
   case 'SIMPLE_ACTION':
    return {
     ...state,
     result: action.payload
    }
   case '@@router/LOCATION_CHANGE':
    console.log('CHanged', action)
    return {query: action.payload.search, ...state};
   default:
    return state
  }
 }