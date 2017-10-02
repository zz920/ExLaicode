var ՐՏ_1, ՐՏ_3, ՐՏ_4, ՐՏ_5, ՐՏ_6;
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function ՐՏ_in(val, arr) {
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(val) !== -1;
    }
    return arr.hasOwnProperty(val);
}
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
}
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function ՐՏ_eq(a, b) {
    var ՐՏitr3, ՐՏidx3;
    var i;
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < a.length; i++) {
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            ՐՏitr3 = ՐՏ_Iterable(a);
            for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
                i = ՐՏitr3[ՐՏidx3];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
var ՐՏ_modules = {};
ՐՏ_modules["cookie"] = {};

(function(){
    var __name__ = "cookie";
    var CookieBuilder = (ՐՏ_1 = function CookieBuilder() {
    }, (function(){
        var _filed = [ "url", "value", "setDomain", "path", "secure", "httpOnly", "sameSite", "expirationDate", "storeId" ];
        var _attr = {};
        Object.defineProperties(ՐՏ_1.prototype, {
            __doc__: {
                enumerable: true, 
                writable: true, 
                value: "# A cookie builder for cookie, if you want to maintain the default value of the filed, please leave it blank."            },
            _filed: {
                enumerable: true, 
                writable: true, 
                value: _filed            },
            _attr: {
                enumerable: true, 
                writable: true, 
                value: _attr            },
            setUrl: {
                enumerable: true, 
                writable: true, 
                value: function setUrl(url){
                    var self = this;
                    self._attr["url"] = url;
                }
            },
            setName: {
                enumerable: true, 
                writable: true, 
                value: function setName(name){
                    var self = this;
                    self._attr["name"] = name;
                }
            },
            setValue: {
                enumerable: true, 
                writable: true, 
                value: function setValue(value){
                    var self = this;
                    self._attr["value"] = value;
                }
            },
            setDomain: {
                enumerable: true, 
                writable: true, 
                value: function setDomain(domain){
                    var self = this;
                    self._attr["setDomain"] = domain;
                }
            },
            setPath: {
                enumerable: true, 
                writable: true, 
                value: function setPath(path){
                    var self = this;
                    self._attr["path"] = path;
                }
            },
            setSecure: {
                enumerable: true, 
                writable: true, 
                value: function setSecure(secure){
                    var self = this;
                    self._attr["secure"] = secure;
                }
            },
            setHttpOnly: {
                enumerable: true, 
                writable: true, 
                value: function setHttpOnly(httponly){
                    var self = this;
                    self._attr["httpOnly"] = httponly;
                }
            },
            setSameSite: {
                enumerable: true, 
                writable: true, 
                value: function setSameSite(samesitestatus){
                    var self = this;
                    self._attr["sameSite"] = samesitestatus;
                }
            },
            setExpirationDate: {
                enumerable: true, 
                writable: true, 
                value: function setExpirationDate(date){
                    var self = this;
                    self._attr["expirationDate"] = date;
                }
            },
            setStorId: {
                enumerable: true, 
                writable: true, 
                value: function setStorId(id){
                    var self = this;
                    self._attr["storeId"] = id;
                }
            },
            isValid: {
                enumerable: true, 
                writable: true, 
                value: function isValid(){
                    var self = this;
                    if (!(ՐՏ_in("url", self._attr))) {
                        return false;
                    }
                    return true;
                }
            },
            getCookie: {
                enumerable: true, 
                writable: true, 
                value: function getCookie(){
                    var ՐՏitr1, ՐՏidx1;
                    var self = this;
                    var result, attr;
                    result = {};
                    if (!self.isValid()) {
                        ՐՏ_print("Warning: the cookie is illegal.");
                        return result;
                    }
                    ՐՏitr1 = ՐՏ_Iterable(self._attr);
                    for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
                        attr = ՐՏitr1[ՐՏidx1];
                        result[attr] = self._attr[attr];
                    }
                    return result;
                }
            },
            loadChromeCookie: {
                enumerable: true, 
                writable: true, 
                value: function loadChromeCookie(chromecookie){
                    var ՐՏ_2, ՐՏitr2, ՐՏidx2;
                    var self = this;
                    var attr;
                    self._attr = {};
                    if (chromecookie === null) {
                        return self;
                    }
                    if ((chromecookie === (ՐՏ_2 = {}) || typeof chromecookie === "object" && ՐՏ_eq(chromecookie, ՐՏ_2))) {
                        return self;
                    }
                    ՐՏitr2 = ՐՏ_Iterable(self._filed);
                    for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
                        attr = ՐՏitr2[ՐՏidx2];
                        self._attr[attr] = chromecookie[attr];
                    }
                    return self;
                }
            }
        });
    })(), ՐՏ_1);
    ՐՏ_modules["cookie"]["CookieBuilder"] = CookieBuilder;
})();

var __name__ = "__main__";
var CookieBuilder = ՐՏ_modules["cookie"].CookieBuilder;

var getChromeCookie = (ՐՏ_3 = function getChromeCookie(url, cookiename, callback) {
    chrome.cookies.get({
        "url": url,
        "name": cookiename
    }, callback);
}, Object.defineProperty(ՐՏ_3, "__doc__", {
    value: "get cookie from chrome."
}), ՐՏ_3);
var setChromeCookie = (ՐՏ_4 = function setChromeCookie(cookie) {
    chrome.cookies.set(cookie);
}, Object.defineProperty(ՐՏ_4, "__doc__", {
    value: "set cookie in chrome."
}), ՐՏ_4);
var removeChromeCookie = (ՐՏ_5 = function removeChromeCookie(cookie) {
    chrome.cookies.remove(cookie);
}, Object.defineProperty(ՐՏ_5, "__doc__", {
    value: "remove cookie from chrome."
}), ՐՏ_5);
var messageHandler = (ՐՏ_6 = function messageHandler(request, sender, sendResponse) {
    ՐՏ_print(request);
    if (request.action === "getCookie") {
        function fakeCallback(cookie) {
            var cookieBuilder;
            cookieBuilder = new CookieBuilder();
            cookieBuilder.loadChromeCookie(cookie);
            ՐՏ_print(cookie, cookieBuilder.getCookie());
            sendResponse(cookieBuilder.loadChromeCookie(cookie).getCookie());
        }
        getChromeCookie(request.url, request.cookieName, fakeCallback);
    }
    if (request.action === "setCookie") {
        setChromeCookie(request.cookie);
        sendResponse();
    }
    if (request.action === "removeCookie") {
        removeChromeCookie(request.cookie);
        sendResponse();
    }
    return true;
}, Object.defineProperty(ՐՏ_6, "__doc__", {
    value: "response to the cookie request"
}), ՐՏ_6);
chrome.runtime.onMessage.addListener(messageHandler);
