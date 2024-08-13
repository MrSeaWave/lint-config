import React, { memo } from 'react';

export const App = memo((props) => {
  const { className } = props;
  return <div className={className}>App</div>;
});

App.displayName = 'App';
