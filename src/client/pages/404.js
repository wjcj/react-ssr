import React from 'react';
import Helmet from 'react-helmet';
import { useComponentWillMount } from '../hooks';

const NotFound = ({ staticContext }) => {
  useComponentWillMount(() => {
    staticContext && (staticContext.NotFound = true);
  });
  return (
    <div className="not-found">
      <Helmet>
        <title>404</title>
        <meta name="description" content="react ssr demo: 404" />
      </Helmet>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
