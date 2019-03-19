import React from 'react';
import {Link } from "react-router-dom";

export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}>About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/metronome">Metronome</Link>
      </li>
      <li>
        <Link to="/tuner">Tuner</Link>
      </li>
    </ul>
  );
}