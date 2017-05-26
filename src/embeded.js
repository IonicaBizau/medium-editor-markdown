(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('medium-editor'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['medium-editor'], factory);
  } else {
    // Browser globals
    root.MeMarkdown = factory(MediumEditor);
  }
})(this, function (MediumEditor) {

  if (typeof MediumEditor !== 'function') {
    throw new Error('Medium Editor is not loaded');
  }

  {{{toMarkdown}}}

  return {{{MeMarkdown}}};

});