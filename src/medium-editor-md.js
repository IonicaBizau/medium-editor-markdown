/**
 * This is the template file for building the embeded Medium Editor Markdown extension.
 * */

(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }

    var he = { decode: {{{he.decode}}} }
      , toMarkdown = {{{toMarkdown}}}
      ;


    root.toMarkdown = toMarkdown;

    function MeMarkdown(options, callback) {
        var self = this;
        if (typeof options === "function") {
            callback = options;
            options = {};
        }
        options = Object(options);
        options.events = options.events || ["input", "change"];
        callback = callback || options.callback || function () {};

        setTimeout(function() {
            self.element = options.element || "[data-medium-element=true]";
            if (typeof self.element === "string") {
                self.element = document.querySelector(self.element);
            }
            self.element = self.element || options.selector;

            function handler() {
                callback(toMarkdown(self.element.innerHTML).split("\n").map(function (c) {
                    return c.trim();
                }).join("\n").trim());
            }

            options.events.forEach(function (c) {
                self.element.addEventListener(c, handler);
            });

            handler();
        }, 0);
    }

    root.MeMarkdown = MeMarkdown;

})(this);
