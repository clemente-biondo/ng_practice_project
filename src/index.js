import app from './app/app';

//This provide exchanges, adds, or remove modules without a full reload.
//This can speed up our development
if (module.hot) {
  module.hot.accept();
}

