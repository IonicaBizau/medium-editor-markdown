
[![medium-editor-markdown](http://i.imgur.com/xb6JPkv.png)](#)

# Medium Editor Markdown

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/medium-editor-markdown.svg)](https://www.npmjs.com/package/medium-editor-markdown) [![Downloads](https://img.shields.io/npm/dt/medium-editor-markdown.svg)](https://www.npmjs.com/package/medium-editor-markdown)

> A Medium Editor extension to add markdown support.

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


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :cake: Thanks

 - [**@daviferreira**](https://github.com/daviferreira/) who created the [Medium Editor library](https://github.com/daviferreira/medium-editor).
 - [**@domchristie**](https://github.com/domchristie/) for creating [to-markdown](https://github.com/domchristie/to-markdown).


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
