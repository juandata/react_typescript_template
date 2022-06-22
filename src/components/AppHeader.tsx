import React from 'react';

interface AppTittle {
  title: string;
  message: string;
}
/**
 * Component for showing an AppHeader.
 *
 * @component
 * @example
 * const title = "Tittle"
 * const message = 'Hello, I am AppHeader!'
 * return (
 *   <AppHeader  title="Tittle" message="Hello, I am AppHeader!" />
 * )
 */
const AppHeader = (props: AppTittle) => {
  return (
    <React.Fragment>
      <h1 style={{ color: 'blue' }}>{props.title}</h1>
      <p>{props.message}</p>
    </React.Fragment>
  );
};

export default AppHeader;
