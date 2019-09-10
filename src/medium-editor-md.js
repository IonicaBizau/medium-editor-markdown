"use strict";

/**
 * MeMarkdown
 * Creates a new instance of `MeMarkdown`.
 *
 * @name MeMarkdown
 * @function
 * @param {Object} options An object containing the following fields:
 *
 *  - `events` (Array): An array with the events when the markdown code will be generated (default: `["input", "change"]`).
 *  - `subscribeToMeEditableInput` (Boolean): If this is true we will respond to the medium editor's custom "editableInput" event
 *  - `callback` (Function): The callback function. If the second argument is a function, then it has greater priority.
 *  - `toTurndownOptions` (Object): Options to pass to the markdown converter code.
 *  - `ignoreBuiltinConverters` (Boolean): If `true`, the default converters passed to `toMarkdown` will be ignored.
 *
 * @param {Function} callback The callback function that is called with the markdown code (first argument).
 */

var toMarkdown = require('turndown');

module.exports = function (options, callback) {

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    // Defaults
    options = Object(options);
    options.events = options.events || ["input", "change"];
    callback = callback || options.callback || function () {};

    var toTurndownOptions = options.toTurndownOptions = Object(options.toTurndownOptions);
    toTurndownOptions.converters = toTurndownOptions.converters || [];
    toTurndownOptions.customRules = toTurndownOptions.customRules || [];

    if (!options.ignoreBuiltinConverters) {
        toTurndownOptions.converters.push({
            filter: function filter(node) {
                return node.nodeName === "DIV" && !node.attributes.length;
            },
            replacement: function replacement(content) {
                return content;
            }
        });
    }

    function normalizeList($elm) {
        var $children = $elm.children;
        for (var i = 0; i < $children.length; ++i) {
            var $cChild = $children[i];
            var $br = $cChild.querySelector("br");
            $br && $br.remove();
            !$cChild.innerHTML.trim() && $cChild.remove();
            var $prevChild = $children[i - 1];
            if (/^UL|OL$/.test($cChild.tagName)) {
                try {
                    $prevChild.appendChild($cChild);
                } catch (e) {
                    console.warn(e);
                }
                normalizeList($cChild);
            }
        }
    }

    // Called by medium-editor during init
    this.init = function () {

        // If this instance of medium-editor doesn't have any elements, there's nothing for us to do
        if (!this.base.elements || !this.base.elements.length) {
            return;
        }

        // Element(s) that this instance of medium-editor is attached to is/are stored in .elements
        this.element = this.base.elements[0];

        // String.prototype.trimRight is non-standard, this should have the same effect
        var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;

        var handler = function () {
            var $clone = this.element.cloneNode(true);
            var $lists = $clone.querySelectorAll("ul, ol");
            for (var i = 0; i < $lists.length; ++i) {
                normalizeList($lists[i]);
            }

            var turndownService = new TurndownService(options.toTurndownOptions);

            toTurndownOptions.customRules.forEach(function (customRule) {
                turndownService.addRule(customRule.key, {
                    filter: customRule.filter,
                    replacement: customRule.replacement
                });
            });

            callback(turndownService.turndown($clone.innerHTML).split("\n").map(function (c) {
                return c.replace(rightWhitespace, '');
            }).join("\n").replace(rightWhitespace, ''));
        }.bind(this);

        if (options.subscribeToMeEditableInput) {
            this.base.subscribe('editableInput', handler);
        } else {
            options.events.forEach(function (c) {
                this.element.addEventListener(c, handler);
            }.bind(this));
        }

        handler();
    };
};