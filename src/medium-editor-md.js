module.exports = function (options, callback) {
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
};
