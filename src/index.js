import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import createConfig from 'curi';
import { Navigator } from 'curi-react';
import { parse } from 'qs';
import createQueryMiddleware from 'curi-middleware-query';

import store from './store';
import routes from './routes';
import renderFunction from './renderFunction';

const history = createHistory();
const queryMiddleware = createQueryMiddleware(parse);

const config = createConfig(history, routes, {
  middleware: [queryMiddleware]
});

config.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Navigator config={config}>
        {renderFunction}
      </Navigator>
    </Provider>,
    document.querySelector('#app-holder')
  );  
});
