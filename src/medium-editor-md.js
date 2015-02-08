/**
 * MeMarkdown
 * Creates a new instance of `MeMarkdown`.
 *
 * @name MeMarkdown
 * @function
 * @param {Object} options An object containing the following fields:
 *
 *  - `events` (Array): An array with the events when the markdown code will be generated (default: `["input", "change"]`).
 *  - `callback` (Function): The callback function. If the second argument is a function, then it has greater priority.
 *  - `selector` (String|HTMLElement): The Medium Editor element or selector (default: `[data-medium-element=true]`).
 *
 * @param {Function} callback The callback function that is called with the markdown code (first argument).
 * @return {undefined}
 */
module.exports = function (options, callback) {
    var self = this;

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    // Defaults
    options = Object(options);
    options.events = options.events || ["input", "change"];
    callback = callback || options.callback || function () {};

    // Wait until the Medium Editor is inited
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
