(function(window) {
    var another = function(selector, elements) {
        this.selector = selector
        this.elements = elements ? elements : document.querySelectorAll(selector)
        this.length   = this.elements.length

        this.css        = css
        this.find       = find
        this.firstChild = firstChild        
        this.lastChild  = lastChild        
        
        this.hasClass    = hasClass
        this.addClass    = addClass
        this.removeClass = removeClass
        this.toggleClass = toggleClass
    }

    function css(properties) {
        $.forEach(this.elements, function(element){
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    element.style[key] = properties[key]
                }
            }
        })

        return this
    }

    function find(selector) {
        var matchedElements = []

        $.forEach(this.elements, function(element) {
            return $.forEach(element.querySelectorAll(selector), function(innerElement) {
                matchedElements.push(innerElement)
            })      
        })

        return new another(selector, matchedElements)
    }

    function firstChild() {
        var firstElement = this.elements[0].firstElementChild

        return new another(undefined, [firstElement])
    }

    function lastChild() {
        var lastElement = this.elements[0].lastElementChild

        return new another(undefined, [lastElement])
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
        return new another(selector)
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

    if (!window.$) {
        window.$ = $
    } else {
        window.anotherJS = $
    }
})(window)