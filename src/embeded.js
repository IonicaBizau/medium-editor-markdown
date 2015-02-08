(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }

    var he = { decode: {{{he.decode}}} }
      , toMarkdown = {{{toMarkdown}}}
      , MeMarkdown = {{{MeMarkdown}}
      ;

    root.MeMarkdown = MeMarkdown;

})(this);
