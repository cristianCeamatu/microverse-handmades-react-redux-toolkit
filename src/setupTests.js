import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});
