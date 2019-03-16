export const simpleAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: `simple payload - ${Date.now()}`
  })
 }