(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }

    var MeMarkdown = function (options, callback) {
    var self = this;

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    // Defaults
    options = Object(options);
    options.events = options.events || ["input", "change"];
    callback = callback || options.callback || function () {};

    // Called by medium-editor during init
    this.init = function(mediumEditorInstance) {
        this.me = mediumEditorInstance;

        // Element(s) that this instance of medium-editor is attached to is/are stored in .elements
        self.element = options.element || (this.me.elements.length > 0 ? this.me.elements[0] : "[data-medium-element=true]");
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
    };
};
    root.MeMarkdown = MeMarkdown;
})(this);
