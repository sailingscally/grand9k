# Grand9K Pixel Font

This Node.JS module provides a tiny font to be used on small OLED displays.

## Methods

- `get(text)` - returns the buffer to be written to the display to print the given text
- `map()` - returns a list of all characters in this font

## Constants

- `NAME` - the name of the font
- `HEIGHT` - the height of the font in pixels (**8**), the width of each character is variable
- `SPACE_WIDTH` - the number of pixels between each character

## Tests & Coverage

[Jest](https://jestjs.io/) is used to implement unit tests and provide test coverage reports on this module.

To run both unit tests and get a test coverage report, just run:

```
npm test
```

The module `babel-plugin-rewire` is necessary to run tests on non exported methods and still be able to get
test coverage reports on these. Using `rewire` would cause the test coverage to fail.

*Note: Since the Raspberry Pi Zero uses an ARMv6 processor, for which the latest Node.JS available is
version 12, we need to use Jest version 28 for compatibility.*

## Character Map

Only the following characters have been implemented:

```JavaScript
[
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', '.', ',', ';', ':', '-', '$', '#', "'",
  '!', '"', '/', '?', '%', '&', '(', ')', '@', 'º',
  ' ', 'Ù', 'Ú'
]
```

The last two characters will print as a superscript 1 and 2 respectively.

## Full Character Map

![Grand9K Pixel character map](/grand9k-pixel-font-character-map.png)

## Usage

This module isn't published to the NPM registry and needs to be installed from GitHub with the command:

```
npm install https://github.com/sailingscally/grand9k
```

## License

The [Grand9K Pixel](https://www.fontget.com/font/grand9k-pixel/) font was created by **Jayvee D. Enaguas**
under the Creative Commons (CC-BY-SA 3.0) license.
