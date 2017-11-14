QUnit.test("Hello JS Tests", function(assert){
    assert.ok('function' === typeof $);
    assert.ok('object' === typeof $());

    var selector      = null;
    var object        = null;
    var expectedValue = null;
    var expectedClass = null;

    // $
    selector = '#main';
    object   = $(selector);
    assert.equal(object.selector, selector);
    assert.equal(object.length, 1);
    assert.equal(object.elements[0].id, 'main');

    /** Class */
    expectedClass = 'side-item';

    // hasClass()
    assert.ok($('.umburg').hasClass('side-item'));
    assert.ok($('.line').hasClass('line'));
    assert.notOk($('.line').hasClass('crossed'));

    // removeClass()
    object = $('.umburg').removeClass(expectedClass);
    assert.notOk(object.elements[0].classList.contains(expectedClass));
    
    // addClass()
    object = $('.umburg').addClass(expectedClass);
    assert.ok(object.elements[0].classList.contains(expectedClass));
        
    // toggleClass()
    object = $('.umburg').toggleClass(expectedClass);
    assert.notOk(object.elements[0].classList.contains(expectedClass));
    object = $('.umburg').toggleClass(expectedClass);
    assert.ok(object.elements[0].classList.contains(expectedClass));

    object = null;
    expectedClass = null;

    /** css() */
    object = $('#dynamic_css_input').css({display: 'none'});
    assert.ok(object.elements[0].style.display === 'none');

    object = $('#dynamic_css_input').css({display: ''});
    assert.ok(object.elements[0].style.display === '');
    
    object = $('#dynamic_css_input').css({visibility: 'collapse'});
    assert.ok(object.elements[0].style.visibility === 'collapse');
    
    object = $('#dynamic_css_input').css({visibility: 'visible'});
    assert.ok(object.elements[0].style.visibility === 'visible');

    object = $('#dynamic_css_input').css({backgroundColor: 'silver', borderColor: 'grey'});
    assert.ok(object.elements[0].style.backgroundColor === 'silver');
    assert.ok(object.elements[0].style.borderColor === 'grey');
    
    object = null;

    // find()
    object = $('.words').find('span');
    assert.equal(object.length, 6);

    // firstChild()
    assert.ok($('.words').firstChild().hasClass('first'));

    // lastChild()
    assert.ok($('.words').lastChild().hasClass('last'));
    
    object = null;
})