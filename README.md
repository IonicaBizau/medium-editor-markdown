![Medium Editor Markdown](http://i.imgur.com/xb6JPkv.png)

# Medium Editor Markdown
A [Medium Editor](https://github.com/daviferreira/medium-editor) extension to add markdown support.

## Usage

The available scripts are:

 - me-markdown.no-deps.js
 - me-markdown.no-deps.min.js
 - me-markdown.standalone.js
 - me-markdown.standalone.min.js

The `*.standalone.*` scripts contain all the dependencies included there.

The `*.no-deps.*` scripts contain only the extension code. You will have to include manually [`he.js`](https://github.com/mathiasbynens/he) and [`to-markdown.js`](https://github.com/domchristie/to-markdown) on the page, before including the markdown extension.

The `*.min.*` scripts are minified.

## Screenshot
![Medium Editor Markdown](http://i.imgur.com/t1taWY0.jpg)

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
                    markDownEl.innerText = md;
                })
            }
        });
    })();
</script>
```

## Thanks to
 - [**@daviferreira**](https://github.com/daviferreira/) who created the [Medium Editor library](https://github.com/daviferreira/medium-editor).
 - [**@domchristie**](https://github.com/domchristie/) for creating [to-markdown](https://github.com/domchristie/to-markdown).
 - [**@mathiasbynens**](https://github.com/mathiasbynens/), the author of [he.js](https://github.com/mathiasbynens/he).

## Building
To rebuild the dist files, run `./build`.

## Documentation
### `MeMarkdown(options, callback)`
Creates a new instance of `MeMarkdown`.

#### Params
- **Object** `options`: An object containing the following fields:
 - `events` (Array): An array with the events when the markdown code will be generated (default: `["input", "change"]`).
 - `callback` (Function): The callback function. If the second argument is a function, then it has greater priority.
 - `selector` (String|HTMLElement): The Medium Editor element or selector (default: `[data-medium-element=true]`).

- **Function** `callback`: The callback function that is called with the markdown code (first argument).

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
