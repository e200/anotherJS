# anotherJS

A very smaller JS library for those front-ends who makes most things using pure CSS and just need something smaller with methods like addClass, removeClass, toggleClass, etc...

## Usage

If you're familiar with jQuery there's nothing to explain.

```javascript
$('body')
    .find('#app')
    .firstChild()
    .addClass('active')
    .show()
```

This library comes with the following methods:

- hide()
- show()
- find()
- addClass()
- removeClass()
- toggleClass()
- firstChild()
- lastChild()

We also supports event handler using the `on()` method:

```javascript
$('body')
    .find('#app')
    .firstChild()
    .on('click', function(){
        $(this).hide()
    })
```

## Support

Need a new feature? Found a bug? Please report it opening an [new issue](https://github.com/e200/anotherJS/issues/new) or mailing [me](mailto://eleandro@inbox.ru) and we'll fix it as soon as possible.

## Contribute

Feel free to contribute forking, making changes and pull requests, we'll be really thankful!

## Credits

- [Eleandro Duzentos](https://e200.github.io) and contributors.

## License

The anotherJS is licensed under the MIT license. See the [license](https://github.com/e200/anotherJS/blob/master/license.md) file for more information.
