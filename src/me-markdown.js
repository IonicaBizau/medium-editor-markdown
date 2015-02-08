(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }

    var MeMarkdown = {{{MeMarkdown}}};
    root.MeMarkdown = MeMarkdown;
})(this);
