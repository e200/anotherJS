QUnit.test("Hello JS Tests", function(assert){
    
    var selector      = null;
    var object        = null;
    var expectedValue = null;
    var expectedClass = null;

    // $
    assert.ok('function' === typeof $);
    assert.ok('object' === typeof $());

    selector = '#main';
    object   = $(selector);
    assert.equal(object.selector, selector);
    assert.equal(object.length, 1);
    assert.equal(object.elements[0].id, 'main');

    // $.forEach() 
    var i = 0;   
    $.forEach([0, 1, 2], function(element){
        assert.equal(element, i);
        i++;
    })

    // $.some()
    assert.ok($.some([0, 1, 2], function(element){
        return (element < 3);
    }))
    assert.notOk($.some([0, 1, 2], function(element){
        return (element > 4);
    }));

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

    // hide()
    object = $('#dynamic_css_input').hide();
    assert.ok(object.elements[0].style.display === 'none');

    // show()
    object = $('#dynamic_css_input').show();
    assert.ok(object.elements[0].style.display === '');

    // toggle()
    object = $('#dynamic_css_input').toggle();
    assert.ok(object.elements[0].style.display === 'none');

    object = $('#dynamic_css_input').toggle();
    assert.ok(object.elements[0].style.display === '');

    object = null

    // next()
    object = $('.words .first').next();
    assert.ok(object.hasClass('next'))

    // prev()
    object = $('.words .next').prev();
    assert.ok(object.hasClass('prev'))

    // find()
    object = $('.words').find('span');
    assert.equal(object.length, 6);

    // firstChild()
    assert.ok($('.words').firstChild().hasClass('first'));

    // lastChild()
    assert.ok($('.words').lastChild().hasClass('last'));
    
    object = null;
})