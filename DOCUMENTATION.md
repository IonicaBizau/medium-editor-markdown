## Documentation

You can see below the API reference of this module.

### `MeMarkdown(options, callback)`
Creates a new instance of `MeMarkdown`.

#### Params
- **Object** `options`: An object containing the following fields:
 - `events` (Array): An array with the events when the markdown code will be generated (default: `["input", "change"]`).
 - `callback` (Function): The callback function. If the second argument is a function, then it has greater priority.
 - `toMarkdownOptions` (Object): Options to pass to the markdown converter code.
 - `ignorebuiltinconverters` (Boolean): If `true`, the default converters passed to `toMarkdown` will be ignored.
- **Function** `callback`: The callback function that is called with the markdown code (first argument).

