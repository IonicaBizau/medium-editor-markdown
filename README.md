[![medium-editor-markdown](http://i.imgur.com/xb6JPkv.png)](#)

# Medium Editor Markdown [![Support this project][donate-now]][paypal-donations]
A Medium Editor extension to add markdown support.

[Click here](https://github.com/daviferreira/medium-editor) to see the Medium Editor project.

## Usage

The available scripts are:

 - me-markdown.no-deps.js
 - me-markdown.no-deps.min.js
 - me-markdown.standalone.js
 - me-markdown.standalone.min.js

The `*.standalone.*` scripts contain all the dependencies included there.

The `*.no-deps.*` scripts contain only the extension code. You will have to include manually [`to-markdown.js`](https://github.com/domchristie/to-markdown) on the page, before including the markdown extension.

The `*.min.*` scripts are minified.

## Demo

[Click here](http://ionicabizau.github.io/medium-editor-markdown) for a live demo.

[![Medium Editor Markdown](http://i.imgur.com/t1taWY0.jpg)](http://ionicabizau.github.io/medium-editor-markdown)

## Example
```html
<div class="editor"></div>
<pre class="markdown"></pre>
<script src="path/to/medium-editor.js"></script>
<script src="path/to/me-markdown.standalone.min.js"></script>
<script>
    (function () {
        var markDownEl = document.querySelector(".markdown");
        new MediumEditor(document.querySelector(".editor"), {
            extensions: {
                markdown: new MeMarkdown(function (md) {
                    markDownEl.textContent = md;
                })
            }
        });
    })();
</script>
```
## Building

To rebuild the dist files, run `./build`.

## Documentation

### `MeMarkdown(options, callback)`
Creates a new instance of `MeMarkdown`.

#### Params
- **Object** `options`: An object containing the following fields:
 - `events` (Array): An array with the events when the markdown code will be generated (default: `["input", "change"]`).
 - `callback` (Function): The callback function. If the second argument is a function, then it has greater priority.
- **Function** `callback`: The callback function that is called with the markdown code (first argument).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Thanks

 - [**@daviferreira**](https://github.com/daviferreira/) who created the [Medium Editor library](https://github.com/daviferreira/medium-editor).
 - [**@domchristie**](https://github.com/domchristie/) for creating [to-markdown](https://github.com/domchristie/to-markdown).

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md