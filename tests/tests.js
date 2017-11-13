QUnit.test("Hello JS Tests", function(assert){
    assert.ok('function' === typeof $)
    assert.ok('object' === typeof $())

    let selector      = null
    let object        = null
    let expectedValue = null
    let expectedClass = null

    // $
    selector = '#main'
    object   = $(selector);
    assert.equal(object.selector, selector)
    assert.equal(object.length, 1)
    assert.equal(object.elements[0].id, 'main')

    /** Class */
    expectedClass = 'side-item'

    // hasClass()
    assert.ok($('.umburg').hasClass('side-item'))
    assert.ok($('.line').hasClass('line'))
    assert.notOk($('.line').hasClass('crossed'))

    // removeClass()
    object = $('.umburg').removeClass(expectedClass)
    assert.notOk(object.elements[0].classList.contains(expectedClass))
    
    // addClass()
    object = $('.umburg').addClass(expectedClass)
    assert.ok(object.elements[0].classList.contains(expectedClass))
        
    // toggleClass()
    object = $('.umburg').toggleClass(expectedClass)
    assert.notOk(object.elements[0].classList.contains(expectedClass))
    object = $('.umburg').toggleClass(expectedClass)
    assert.ok(object.elements[0].classList.contains(expectedClass))

    object = null
    expectedClass = null

    // find()
    object = $('.words').find('span')
    assert.equal(object.length, 6)

    object = null
})