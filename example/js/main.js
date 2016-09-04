"use strict";

window.addEventListener("load", function () {
    var markDownEl = document.querySelector(".editor > .right > pre");
    new MediumEditor(".editor > .left", {
        toolbar: {
            buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', "unorderedlist"]
        },
        extensions: {
            markdown: new MeMarkdown(function (md) {
                markDownEl.textContent = md;
            })
        }
    });
});