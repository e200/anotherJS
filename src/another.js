(function(window) {
    var slim = function(selector, elements) {
        this.selector = selector
        this.elements = elements ? elements : document.querySelectorAll(selector)
        this.length   = this.elements.length

        this.find = find

        this.hasClass    = hasClass
        this.addClass    = addClass
        this.removeClass = removeClass
        this.toggleClass = toggleClass
    }

    function find(selector) {
        var matchedElements = []

        $.forEach(this.elements, function(element) {
            return $.forEach(element.querySelectorAll(selector), function(innerElement) {
                matchedElements.push(innerElement)
            })      
        })

        return new slim(selector, matchedElements)
    }

    /**
     * Checks if elements has `className`
     * 
     * @param string className 
     */
    function hasClass(className) {
        var callback = function(element) {
            return element.classList.contains(className)
        }

        return $.some(this.elements, callback)
    }

    /**
     * Adds `className` into `elements.classList`
     * 
     * @param string className 
     */
    function addClass(className) {
        var callback = function(element) {
            element.classList.add(className)
        }

        $.forEach(this.elements, callback)
        
        return this
    }

    /**
     * Removes `className` from `elements.classList`
     * 
     * @param string className 
     */
    function removeClass(className) {
        var callback = function(element) {
            element.classList.remove(className)
        }

        $.forEach(this.elements, callback)
        
        return this
    }

     /**
     * Toggles class `className` from `elements.classList`
     * 
     * @param string className 
     */
    function toggleClass(className) {
        if (this.hasClass(className)) {
            this.removeClass(className)
        } else {
            this.addClass(className)
        }

        return this
    }

    var $ = function(selector) {
        return new slim(selector)
    }

    $.map = function (list, callback) {
        let
            i        = list.length
            elements = []

        while (i--) {
            var currentElement = list[i]

            if (callback(currentElement)) {
                elements.push(currentElement)
            }
        }

        return elements
    }

    $.walk = function (list, callback) {
        let
            i        = list.length
            elements = []

        while (i--) {
            var currentElement = list[i]

            elements.push(callback(currentElement))
        }

        return elements
    }

    $.some = function (list, callback) {
        var i = list.length
        
        while (i--) {
            if (callback(list[i])) {
                return true
            }
        }
        
        return false
    }

    $.forEach = function (list, callback) {
        var i = list.length

        while (i--) {
            callback.apply(list[i], [list[i]])
        }
    }

    window.$ = $
})(window)