window.addEventListener("load", function () {
    var markDownEl = document.querySelector(".editor > .right > pre");
    new MediumEditor(document.querySelector(".editor > .left"), {
        extensions: {
            markdown: new MeMarkdown(function (md) {
                markDownEl.innerText = md;
            })
        }
    });
});
