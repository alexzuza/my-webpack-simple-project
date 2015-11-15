import style from './css/main.css';
import test from './modules/test';

require.ensure([], function(require) {
  let auth, authWidget;

  function placeWidget(div) {
    auth = require('./modules/auth');
    authWidget = auth();
    div.appendChild(authWidget);
  }
  
  const app = document.getElementById('app');
  placeWidget(app);

  module.hot.accept('./modules/auth', function() {
    app.removeChild(authWidget);
    placeWidget(app);
  });
});

