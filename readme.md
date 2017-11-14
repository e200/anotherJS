# anotherJS

A very smaller JS library for those **Frontends** who makes most things using pure CSS and just need something smaller within methods like toggleClass, show, hide, find, css, etc...

## Usage

If you're familiar with jQuery there's no much to explain:

```javascript
$('body')
    .find('#app')
    .firstChild()
    .addClass('active')
    .show()
```

This library comes with the following methods:

- css()
- hide()
- show()
- toggle()
- addClass()
- removeClass()
- toggleClass()
- next()
- prev()
- find()
- firstChild()
- lastChild()

We also support event handling using the `on()` and `off()` methods:

```javascript
$('body')
    .find('#app')
    .firstChild()
    .on('click', function(){
        $(this).hide()
    })
```

```javascript
$('body')
    .find('#app')
    .firstChild()
    .off('click')
```

You can get the **NodeList** of the matched elements:

```javascript
$('selector').elements
```

Getting the matched elements length:

```javascript
$('selector').length
```

Getting the query selector string used to match the elements:

```javascript
$('selector').selector
```

## Support

Need a new feature? Found a bug? Please report it opening an [new issue](https://github.com/e200/anotherJS/issues/new) or mailing [me](mailto://eleandro@inbox.ru) and we'll fix it as soon as possible.

## Contribute

Feel free to contribute forking, making changes and pull requests, we'll be really thankful!

## Credits

- [Eleandro Duzentos](https://e200.github.io) and contributors.

## License

The anotherJS is licensed under the MIT license. See the [license](https://github.com/e200/anotherJS/blob/master/license.md) file for more information.
