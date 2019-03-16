import React from 'react';

export default ({ match }) => {
  return <h3>Requested Param: {match.params.id}</h3>;
}