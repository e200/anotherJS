QUnit.test("Hello JS Tests", function(assert){

    /**
     * Testing the `$` behaviour
     * 
     * We need to make sure `$` is a
     * function and when invoked
     * returns an `another` object.
     * 
     * We also need to make sure
     * that if someone uses `$(this)`
     * where the `this` context is
     * an `another` function|object
     * we will return the context object.
     */
    assert.ok('function' === typeof $, '$ must be a function');
    assert.ok('object' === typeof $(), 'The $() must return an object');
    var object = $('body');
    assert.equal(object, $(object), 'The returned object must have the object.selector');

    /**
     * We need to ensure that `$.forEach()`
     * calls and returns the current element
     * for each element on the `list`.
     */
    var i = 0;   
    $.forEach([0, 1, 2], function(element){
        assert.equal(element, i);
        i++;
    })

    /**
     * We need to ensure that `$.some()`
     * returns true for an element when
     * calling the test callback function
     * for at least one element on the `list`,
     * and false if not.
     */
    assert.ok($.some([0, 1, 2], function(element){
        return (element < 3);
    }))
    assert.notOk($.some([0, 1, 2], function(element){
        return (element > 4);
    }));

    /**
     * Testing the $('selector')
     * 
     * Here will make sure $('selector')
     * return a new `another` object
     * containing the target(s) elements(s).
     * 
     * We also need to make sure the returned
     * object contains fills the properties:
     * 
     * object.selector
     * object.length
     * object.elements
     */
    var selector = '#main';
    var object   = $(selector);
    assert.equal(object.elements[0].id, 'main', 'The returned object must contains the target element');    
    assert.equal(object.selector, selector, 'The returned object must have the object.selector');
    assert.equal(object.length, 1, 'The returned object must have a length of 1');

    /**
     * We need to make sure that
     * `hasClass()` returns true if
     * at least one target element
     * has the given class name, and
     * false if not.
     */
    assert.ok($('.umburg').hasClass('side-item'), 'Must return true since `.umburg` has the class `.side-item`');
    assert.ok($('.line').hasClass('line'), 'Must return true since `.line` has the class `.line`');
    assert.notOk($('.line').hasClass('crossed'), 'Must return false since `.line` hasn\'t the class `.crossed`');

    /**
     * We need to make sure that
     * `removeClass()` removes the
     * given class from all target
     * elements.
     */
    var object = $('.umburg').removeClass('side-item');
    assert.notOk(object.elements[0].classList.contains('side-item'), 'Must return false, `.umburg` hasn\'t the class `.side-item`');
    
    /**
     * We need to make sure that
     * `addClass()` adds the
     * given class to all target
     * elements.
     */
    var object = $('.umburg').addClass('side-item');
    assert.ok(object.elements[0].classList.contains('side-item'), 'Must return true, `.umburg` has the class `.side-item`');
        
    // toggleClass()
    var object = $('.umburg').toggleClass('side-item');
    assert.notOk(object.elements[0].classList.contains('side-item'));
    var object = $('.umburg').toggleClass('side-item');
    assert.ok(object.elements[0].classList.contains('side-item'));

    /** css() */
    var object = $('#dynamic_css_input').css({display: 'none'});
    assert.ok(object.elements[0].style.display === 'none');

    var object = $('#dynamic_css_input').css({display: ''});
    assert.ok(object.elements[0].style.display === '');
    
    var object = $('#dynamic_css_input').css({visibility: 'collapse'});
    assert.ok(object.elements[0].style.visibility === 'collapse');
    
    var object = $('#dynamic_css_input').css({visibility: 'visible'});
    assert.ok(object.elements[0].style.visibility === 'visible');

    var object = $('#dynamic_css_input').css({backgroundColor: 'silver', borderColor: 'grey'});
    assert.ok(object.elements[0].style.backgroundColor === 'silver');
    assert.ok(object.elements[0].style.borderColor === 'grey');

    // hide()
    var object = $('#dynamic_css_input').hide();
    assert.ok(object.elements[0].style.display === 'none');

    // show()
    var object = $('#dynamic_css_input').show();
    assert.ok(object.elements[0].style.display === '');

    // toggle()
    var object = $('#dynamic_css_input').toggle();
    assert.ok(object.elements[0].style.display === 'none');

    var object = $('#dynamic_css_input').toggle();
    assert.ok(object.elements[0].style.display === '');

    // next()
    var object = $('.words .first').next();
    assert.ok(object.hasClass('next'))

     // next()
     console.log($('.words2 .active').next());
     assert.ok($('.words2 .active').next() === null);

    // prev()
    var object = $('.words .next').prev();
    assert.ok(object.hasClass('prev'))

    // find()
    var object = $('.words').find('span');
    assert.equal(object.length, 6);

    // firstChild()
    assert.ok($('.words').firstChild().hasClass('first'));

    // lastChild()
    assert.ok($('.words').lastChild().hasClass('last'));
})