import { window } from 'global';

if (window.parent !== window) {
  try {
    // eslint-disable-next-line no-underscore-dangle
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  } catch (error) {
    // The above line can throw if we do not have access to the parent frame -- i.e. cross origin
  }
}
window.STORYBOOK_REACT_CLASSES = {};
window.STORYBOOK_ENV = 'react';
