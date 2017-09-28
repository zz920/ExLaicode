var ՐՏ_1, ՐՏ_2, ՐՏ_3, ՐՏitr3, ՐՏidx3;
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
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
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
    var ՐՏitr4, ՐՏidx4;
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
            ՐՏitr4 = ՐՏ_Iterable(a);
            for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
                i = ՐՏitr4[ՐՏidx4];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
var ValueError = (ՐՏ_4 = function ValueError() {
    ValueError.prototype.__init__.apply(this, arguments);
}, ՐՏ_extends(ՐՏ_4, Error), Object.defineProperties(ՐՏ_4.prototype, {
    __init__: {
        enumerable: true, 
        writable: true, 
        value: function __init__(message){
            var self = this;
            self.name = "ValueError";
            self.message = message;
        }
    }
}), ՐՏ_4);

var __name__ = "__main__";
var ProgIndex, entry_dict, pid;
var getProgIndex = (ՐՏ_1 = function getProgIndex() {
    var ՐՏitr1, ՐՏidx1, ՐՏupk1;
    var table, head_content, index, th;
    table = document.getElementsByClassName("table")[0];
    head_content = table.tHead.children[0];
    ՐՏitr1 = ՐՏ_Iterable(enumerate(head_content.children));
    for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
        ՐՏupk1 = ՐՏitr1[ՐՏidx1];
        index = ՐՏupk1[0];
        th = ՐՏupk1[1];
        if (th.innerHTML === "Progress") {
            return index;
        }
    }
    throw new ValueError("'Progress' doesn't exist, please verify the code of getProgIndex.");
}, Object.defineProperty(ՐՏ_1, "__doc__", {
    value: "get progress index from thead"
}), ՐՏ_1);
var getIdEntryPair = (ՐՏ_2 = function getIdEntryPair() {
    var ՐՏitr2, ՐՏidx2;
    var entry_list, id_entry_pair, entry, pid;
    entry_list = document.getElementsByClassName("problem-entry");
    id_entry_pair = {};
    ՐՏitr2 = ՐՏ_Iterable(entry_list);
    for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
        entry = ՐՏitr2[ՐՏidx2];
        pid = entry.getAttribute("data-pid");
        id_entry_pair[pid] = entry;
    }
    return id_entry_pair;
}, Object.defineProperty(ՐՏ_2, "__doc__", {
    value: "get all problem id entry paris."
}), ՐՏ_2);
var resetProblemById = (ՐՏ_3 = function resetProblemById(entry_pair, pid, pindex) {
    var prob_tr, prob_prog_td;
    prob_tr = entry_pair[pid];
    prob_prog_td = prob_tr.children[pindex];
    prob_prog_td.className = "problem-progress progress-0";
}, Object.defineProperty(ՐՏ_3, "__doc__", {
    value: "reset the problem to unsloved."
}), ՐՏ_3);
ProgIndex = getProgIndex();
entry_dict = getIdEntryPair();
ՐՏitr3 = ՐՏ_Iterable(entry_dict);
for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
    pid = ՐՏitr3[ՐՏidx3];
    resetProblemById(entry_dict, pid, ProgIndex);
}var ՐՏ_4;

