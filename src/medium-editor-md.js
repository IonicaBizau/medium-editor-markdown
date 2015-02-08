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
    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    // Defaults
    options = Object(options);
    options.events = options.events || ["input", "change"];
    callback = callback || options.callback || function () {};

    // Called by medium-editor during init
    this.init = function(meInstance) {
        this.me = meInstance;

        // If this instance of medium-editor doesn't have any elements, there's nothing for us to do
        if (this.me.elements.length > 0) {
            // Element(s) that this instance of medium-editor is attached to is/are stored in .elements
            this.element = this.me.elements[0];

            var handler = function() {
                callback(toMarkdown(this.element.innerHTML).split("\n").map(function (c) {
                    return c.trim();
                }).join("\n").trim());
            }.bind(this);

            options.events.forEach(function (c) {
                this.element.addEventListener(c, handler);
            }.bind(this));

            handler();
        }
    };
};
