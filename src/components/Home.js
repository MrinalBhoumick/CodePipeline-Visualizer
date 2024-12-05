// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>AWS CodePipeline Visualization</h1>
      <p>
        This is an interactive web application to help you understand how AWS CodePipeline works.
      </p>
      <Link to="/visualization">Go to Visualization</Link>
    </div>
  );
}

export default Home;
