window.addEventListener("load", function () {
    var markDownEl = document.querySelector(".editor > .right > pre");
    new MediumEditor(document.querySelector(".editor > .left"), {
        buttons: ["bold", "italic", "underline", "orderedlist", "unorderedlist", "anchor", "header1", "header2", "quote"]
      , extensions: {
            markdown: new MeMarkdown(function (md) {
                markDownEl.innerText = md;
            })
        }
    });
});
