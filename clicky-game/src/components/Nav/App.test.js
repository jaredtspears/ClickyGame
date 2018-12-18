
// this came in with the react-create-app, not sure I will need this file
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
