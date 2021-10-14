// The Gauge-- not my writing! its imported and modified to my needs

function Gauge(el) {
    //Private Properties and Attributes

    let element, // Containing element for the info component
        data, // `.gauge__data` element
        needle, // `.gauge__needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop // Style for transform

    //Private Methods and Functions

    let setElement = function (el) {
        // Keep a reference to the various elements and sub-elements
        element = el
        data = element.querySelector('.gauge__data')
        needle = element.querySelector('.gauge__needle')
    }

    let setValue = function (x) {
        value = x
        let turns = -0.5 + x * 0.5
        data.style[prop] = 'rotate(' + turns + 'turn)'
        needle.style[prop] = 'rotate(' + turns + 'turn)'
    }

    //Object to be Returned

    function exports() {}

    //Public API Methods

    exports.element = function (el) {
        if (!arguments.length) {
            return element
        }
        setElement(el)
        return this
    }

    exports.value = function (x) {
        if (!arguments.length) {
            return value
        }
        setValue(x)
        return this
    }

    //nitialization

    let body = document.getElementsByTagName('body')[0]
    ;['webkitTransform', 'mozTransform', 'msTransform', 'oTransform', 'transform'].forEach(function (p) {
        if (typeof body.style[p] !== 'undefined') {
            prop = p
        }
    })

    if (arguments.length) {
        setElement(el)
    }

    return exports
}

export function nitialization(howBusy) {
    let gauge = new Gauge(document.getElementById('gauge'))
    gauge.value(howBusy)
}
