import React from 'react';
import { Route, Link } from "react-router-dom";
import Topic from './Topic';

export default ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components?foo=bar&baz=qux`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state#hello`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}