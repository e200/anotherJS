(function(window) {
    /**
     * Another object.
     * 
     * @param string selector Query selector for target DOM elements
     * @param array  elements Array containing DOM elements
     */
    var another = function(selector, elements) {
        if (typeof selector == 'function') {
            window.onload = selector;
        } else {
            this.selector = selector;
            
            /**
             * If we get a list of elements from outside
             * of this function, we'll use these elements
             * instead of query new ones.
             */
            this.elements = elements ? elements : document.querySelectorAll(selector);
            this.length   = this.elements.length;
    
            this.css    = css;
            this.hide   = hide;
            this.show   = show;
            this.toggle = toggle;
    
            this.on  = on
            this.off = off
    
            this.next       = next;
            this.prev       = prev;
            this.find       = find;
            this.firstChild = firstChild;
            this.lastChild  = lastChild;
            
            this.hasClass    = hasClass;
            this.addClass    = addClass;
            this.removeClass = removeClass;
            this.toggleClass = toggleClass;
        }
    }

    /**
     * Gets the first target next element sibling.
     */
    function next() {
        var nextElement = this.elements[0].nextElementSibling;

        return new another(undefined, [nextElement]);
    }

    /**
     * Gets the first target previous element sibling.
     */
    function prev() {
        var prevElement = this.elements[0].previousElementSibling;
        
        return new another(undefined, [prevElement]);
    }

    /**
     * Sets css properties into targets elements.
     * 
     * @param object properties 
     */
    function css(properties) {
        $.forEach(this.elements, function(element){
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    element.style[key] = properties[key];
                }
            }
        });

        return this;
    }

    /**
     * Hides the target element.
     */
    function hide() {
        $.forEach(this.elements, function(element) {
            element.style.display = 'none';
        });

        return this;
    }

    /**
     * Shows the target element.
     */
    function show() {
        $.forEach(this.elements, function(element) {
            element.style.display = '';
        });

        return this;
    }

    /**
     * Toggles the visibility of the target element.
     */
    function toggle() {
        $.forEach(this.elements, function(element) {
            if (element.style.display === 'none') {
                element.style.display = '';
            } else {
                element.style.display = 'none';            
            }
        });

        return this;
    }

    /**
     * Finds DOM elements inside the targets elements.
     * 
     * @param string selector 
     */
    function find(selector) {
        var matchedElements = [];

        $.forEach(this.elements, function(element) {
            return $.forEach(element.querySelectorAll(selector), function(innerElement) {
                matchedElements.push(innerElement);
            });
        });

        return new another(selector, matchedElements);
    }

    /**
     * Gets the first DOM element inside the first target element.
     */
    function firstChild() {
        var firstElement = this.elements[0].firstElementChild;

        return new another(undefined, [firstElement]);
    }

    /**
     * Gets the last DOM element inside the last target element.
     */
    function lastChild() {
        var lastElement = this.elements[0].lastElementChild;

        return new another(undefined, [lastElement]);
    }

    /**
     * Checks if elements has `className`
     * 
     * @param string className 
     */
    function hasClass(className) {
        var callback = function(element) {
            return element.classList.contains(className);
        }

        return $.some(this.elements, callback);
    }

    /**
     * Adds `className` into `elements.classList`
     * 
     * @param string className 
     */
    function addClass(className) {
        var callback = function(element) {
            element.classList.add(className);
        }

        $.forEach(this.elements, callback);
        
        return this;
    }

    /**
     * Removes `className` from `elements.classList`
     * 
     * @param string className 
     */
    function removeClass(className) {
        var callback = function(element) {
            element.classList.remove(className);
        }

        $.forEach(this.elements, callback);
        
        return this;
    }

     /**
     * Toggles class `className` from `elements.classList`
     * 
     * @param string className 
     */
    function toggleClass(className) {
        var callback = function(element) {
            element.classList.toggle(className);
        }

        $.forEach(this.elements, callback);

        return this;
    }

    /**
     * Adds event listeners to the targets.
     * 
     * @param string event_name 
     * @param function callback 
     */
    function on(event_name, callback) {
        bindCallback = callback.bind(this);

        $.forEach(this.elements, function(element){
            element.addEventListener(event_name, bindCallback);
        })
    }

    /**
     * Removes event listeners from the targets.
     * 
     * @param string event_name 
     * @param function callback 
     */
    function off(event_name) {        
        $.forEach(this.elements, function(element){
            element.removeEventListener(event_name);
        })
    }

    /**
     * Gets the bootstrapper function.
     * 
     * @param string selector 
     */
    var $ = function(selector) {
        return new another(selector);
    }

    /**
     * Returns an array containing all
     * elements witch the test `callback`
     * functions returns true when invoked.
     * 
     * @param array    list Array list
     * @param function callback Test callback function
     */
    $.some = function (list, callback) {
        var i = list.length;
        
        while (i--) {
            if (callback(list[i])) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Executes the `callback` for each
     * element in the `list`.
     * 
     * The `callback` will get the current
     * element as function argument.
     * 
     * @param array    list Array list
     * @param function callback Test callback function
     */
    $.forEach = function (list, callback) {
        var i = list.length;

        while (i--) {
            callback(list[i]);
        }
    }

    /**
     * If someone has already signed `$`,
     * will use the `anotherJS` as
     * alternative.
     * 
     * This will prevent conflits with
     * other libraries that uses `$`.
     */
    if (!window.$) {
        window.$ = $;
    } else {
        window.anotherJS = $;
    }
})(window)