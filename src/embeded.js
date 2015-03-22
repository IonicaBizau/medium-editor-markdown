(function (root) {
    if (typeof MediumEditor !== "function") {
        throw new Error("Medium Editor is not loaded on the page.");
    }


    // he.js private functions
    var merge = function(options, defaults) {
            if (!options) {
                    return defaults;
            }
            var result = {};
            var key;
            for (key in defaults) {
                    // A `hasOwnProperty` check is not needed here, since only recognized
                    // option names are used anyway. Any others are ignored.
                    result[key] = has(options, key) ? options[key] : defaults[key];
            }
            return result;
    };
    var codePointToSymbol = function(codePoint, strict) {
            var output = '';
            if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
                    // See issue #4:
                    // “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
                    // greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
                    // REPLACEMENT CHARACTER.”
                    if (strict) {
                            parseError('character reference outside the permissible Unicode range');
                    }
                    return '\uFFFD';
            }
            if (has(decodeMapNumeric, codePoint)) {
                    if (strict) {
                            parseError('disallowed character reference');
                    }
                    return decodeMapNumeric[codePoint];
            }
            if (strict && contains(invalidReferenceCodePoints, codePoint)) {
                    parseError('disallowed character reference');
            }
            if (codePoint > 0xFFFF) {
                    codePoint -= 0x10000;
                    output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
                    codePoint = 0xDC00 | codePoint & 0x3FF;
            }
            output += stringFromCharCode(codePoint);
            return output;
    };

    var parseError = function(message) {
            throw Error('Parse error: ' + message);
    };

    // Embed the libraries
    var he = { decode: {{{he.decode}}} }
      , toMarkdown = {{{toMarkdown}}}
      , MeMarkdown = {{{MeMarkdown}}}
      ;

    root.MeMarkdown = MeMarkdown;
})(this);
