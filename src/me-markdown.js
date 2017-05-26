(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('medium-editor'), require('to-markdown'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['medium-editor', 'to-markdown'], factory);
  } else {
    // Browser globals
    root.MeMarkdown = factory(MediumEditor, toMarkdown);
  }
})(this, function (MediumEditor, toMarkdown) {

  if (typeof MediumEditor !== 'function') {
    throw new Error('Medium Editor is not loaded');
  }

  if (typeof toMarkdown !== 'function') {
    throw new Error('toMarkdown is not loaded');
  }

  return {{{MeMarkdown}}};

});