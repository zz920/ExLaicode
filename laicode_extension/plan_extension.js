var ՐՏ_1, ՐՏ_3, ՐՏ_4, ՐՏ_5, ՐՏ_6, ՐՏ_7, ՐՏ_8, ՐՏ_9;
function enumerate(item) {
    var arr, iter, i;
    arr = [];
    iter = ՐՏ_Iterable(item);
    for (i = 0; i < iter.length; i++) {
        arr[arr.length] = [ i, item[i] ];
    }
    return arr;
}
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
    var ՐՏitr6, ՐՏidx6;
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
            ՐՏitr6 = ՐՏ_Iterable(a);
            for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                i = ՐՏitr6[ՐՏidx6];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
var ValueError = (ՐՏ_10 = function ValueError() {
    ValueError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_10, Error), Object.defineProperties(ՐՏ_10.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "ValueError";
            self.message = message;
        }
    }
}), ՐՏ_10);
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
var PLAN_URL, COOKIE_NAME;
var CookieBuilder = ՐՏ_modules["cookie"].CookieBuilder;

PLAN_URL = "http://code.laioffer.com";
COOKIE_NAME = "plan_record";
var getProgIndex = (ՐՏ_3 = function getProgIndex() {
    var ՐՏitr3, ՐՏidx3, ՐՏupk1;
    var table, head_content, index, th;
    table = document.getElementsByClassName("table")[0];
    head_content = table.tHead.children[0];
    ՐՏitr3 = ՐՏ_Iterable(enumerate(head_content.children));
    for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
        ՐՏupk1 = ՐՏitr3[ՐՏidx3];
        index = ՐՏupk1[0];
        th = ՐՏupk1[1];
        if (th.innerHTML === "Progress") {
            return index;
        }
    }
    throw new ValueError("'Progress' doesn't exist, please verify the code of getProgIndex.");
}, Object.defineProperty(ՐՏ_3, "__doc__", {
    value: "get progress index from thead"
}), ՐՏ_3);
var getIdEntryPair = (ՐՏ_4 = function getIdEntryPair() {
    var ՐՏitr4, ՐՏidx4;
    var entry_list, id_entry_pair, entry, pid;
    entry_list = document.getElementsByClassName("problem-entry");
    id_entry_pair = {};
    ՐՏitr4 = ՐՏ_Iterable(entry_list);
    for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
        entry = ՐՏitr4[ՐՏidx4];
        pid = entry.getAttribute("data-pid");
        id_entry_pair[pid] = entry;
    }
    return id_entry_pair;
}, Object.defineProperty(ՐՏ_4, "__doc__", {
    value: "get all problem id entry paris."
}), ՐՏ_4);
var resetProblemByTr = (ՐՏ_5 = function resetProblemByTr(prob_tr, pindex, status) {
    var prob_prog_td;
    prob_prog_td = prob_tr.children[pindex];
    prob_prog_td.className = "problem-progress progress-" + status;
}, Object.defineProperty(ՐՏ_5, "__doc__", {
    value: "reset the problem to unsloved."
}), ՐՏ_5);
var resetAllProblem = (ՐՏ_6 = function resetAllProblem(entry_dict, value_dict, index) {
    var ՐՏitr5, ՐՏidx5;
    var pid;
    ՐՏitr5 = ՐՏ_Iterable(entry_dict);
    for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
        pid = ՐՏitr5[ՐՏidx5];
        if (ՐՏ_in(pid, value_dict)) {
            resetProblemByTr(entry_dict[pid], index, value_dict[pid]);
        } else {
            resetProblemByTr(entry_dict[pid], index, 0);
        }
    }
}, Object.defineProperty(ՐՏ_6, "__doc__", {
    value: "reset all problems to unsloved"
}), ՐՏ_6);
var recoverProblemByCookie = (ՐՏ_7 = function recoverProblemByCookie(cookieBuilder, entry_dict, index) {
    var cookie, cookie_value;
    if (!cookieBuilder.isValid()) {
        resetAllProblem(entry_dict, {}, index);
        cookieBuilder.setUrl(PLAN_URL);
        cookieBuilder.setName(COOKIE_NAME);
        cookieBuilder.setValue("{-1 : 3}");
        cookieBuilder.setExpirationDate(24 * 3600 * 365 * 50);
        sendSetMessage(cookieBuilder.getCookie());
        return;
    }
    ՐՏ_print("cookie is not emty.");
    cookie = cookieBuilder.getCookie();
    cookie_value = eval(cookie["value"]);
    ՐՏ_print(cookie_value);
    resetAllProblem(entry_dict, cookie_value, index);
}, Object.defineProperty(ՐՏ_7, "__doc__", {
    value: "recover the progress label by cookie."
}), ՐՏ_7);
var sendGetMessage = (ՐՏ_8 = function sendGetMessage(url, cookiename, callback) {
    var request;
    request = {
        "action": "getCookie",
        "url": url,
        "cookieName": cookiename
    };
    chrome.runtime.sendMessage(request, callback);
}, Object.defineProperty(ՐՏ_8, "__doc__", {
    value: "broadcast a cookie get request."
}), ՐՏ_8);
var sendSetMessage = (ՐՏ_9 = function sendSetMessage(cookie) {
    var request;
    ՐՏ_print("send Message");
    ՐՏ_print(cookie);
    request = {
        "action": "setCookie",
        "cookie": cookie
    };
    chrome.runtime.sendMessage(request);
}, Object.defineProperty(ՐՏ_9, "__doc__", {
    value: "broadcast a cookie set request."
}), ՐՏ_9);
function fakeCallback(response) {
    var prog_index, entry_dict, cookieBuilder;
    prog_index = getProgIndex();
    entry_dict = getIdEntryPair();
    ՐՏ_print(response);
    cookieBuilder = new CookieBuilder();
    cookieBuilder.loadChromeCookie(response);
    recoverProblemByCookie(cookieBuilder, entry_dict, prog_index);
}
sendGetMessage(PLAN_URL, COOKIE_NAME, fakeCallback);var ՐՏ_10;

