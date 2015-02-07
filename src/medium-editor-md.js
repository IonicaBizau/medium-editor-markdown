/**
 * This is the template file for building the embeded Medium Editor Markdown extension.
 * */

(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }

    var he = {
            decode: {{{he.decode}}}
        }
      , toMarkdown = {{{toMarkdown}}}
      ;


    root.toMarkdown = toMarkdown;
    alert(toMarkdown("<h1>test</h1>"));
})(this);
