(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }

    var MeMarkdown = function (options, callback) {
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

        // Element(s) that this instance of medium-editor is attached to is/are stored in .elements
        this.element = options.element || (this.me.elements.length > 0 ? this.me.elements[0] : "[data-medium-element=true]");
        if (typeof this.element === "string") {
            this.element = document.querySelector(this.element);
        }
        this.element = this.element || options.selector;

        var handler = function() {
            callback(toMarkdown(this.element.innerHTML).split("\n").map(function (c) {
                return c.trim();
            }).join("\n").trim());
        }.bind(this);

        options.events.forEach(function (c) {
            this.element.addEventListener(c, handler);
        }.bind(this));

        handler();
    };
};
    root.MeMarkdown = MeMarkdown;
})(this);
