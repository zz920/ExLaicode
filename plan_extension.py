# document for RapydScript: https://github.com/atsepkov/RapydScript
# some code examples: http://www.rapydscript.com/category/examples/
from cookie import CookieBuilder
from util import strToJs, jsToStr


PLAN_URL = "http://code.laioffer.com"
COOKIE_NAME = "plan_record"
EDITOR_URL = "http://code.laioffer.com/editor/"


def fakeCallback(response):
    """ a make-up call back function for sendGetMessage. """ 
    prog_index = getProgIndex()
    entry_dict = getIdEntryPair()
    cookieBuilder = CookieBuilder()
    cookieBuilder.loadChromeCookie(response)
    recoverProblemByCookie(cookieBuilder, entry_dict, prog_index)


def getProgIndex():
    """ get progress index from thead"""
    table = document.getElementsByClassName("table")[0]
    head_content = table.tHead.children[0]

    for index, th in enumerate(head_content.children):
        if th.innerHTML == "Progress":
            return index
    # not exist, please check the update of laicode
    raise ValueError("'Progress' doesn't exist, please verify the code of getProgIndex.")


def getIdEntryPair():
    """ get all problem id entry paris."""
    entry_list = document.getElementsByClassName("problem-entry")
    id_entry_pair = {}

    for entry in entry_list:
        pid = entry.getAttribute("data-pid")
        id_entry_pair[pid] = entry

    return id_entry_pair


def resetHrefLink(prob_tr, pid):
    """ fixed the wheel click can't redirect to editor page. """
    prob_link_td = prob_tr.firstElementChild
    a_tag = prob_link_td.firstChild
    a_tag.href = EDITOR_URL + pid 


def resetProblemByTr(prob_tr, pindex, status):
    """ reset the problem to unsloved."""
    prob_prog_td = prob_tr.children[pindex]
    prob_prog_td.className = "problem-progress progress-" + status


def resetAllProblem(entry_dict, value_dict, index):
    """ reset all problems to unsloved. """
    for pid in entry_dict:
        if pid in value_dict:
            resetProblemByTr(entry_dict[pid], index, value_dict[pid])
        else:
            resetProblemByTr(entry_dict[pid], index, 0)
        resetHrefLink(entry_dict[pid], pid)


def recoverProblemByCookie(cookieBuilder, entry_dict, index):
    """ recover the progress label by cookie. """
    if not cookieBuilder.isValid():
        resetAllProblem(entry_dict, {}, index)
        cookieBuilder.setUrl(PLAN_URL)
        cookieBuilder.setName(COOKIE_NAME)
        cookieBuilder.setValue('{}')
        cookieBuilder.setExpirationDate(24 * 3600 * 365 * 50)
        sendSetMessage(cookieBuilder.getCookie())
        return
    cookie = cookieBuilder.getCookie()
    finish_code = strToJs(cookie["value"])
    resetAllProblem(entry_dict, finish_code, index)


def sendGetMessage(url, cookiename, callback):
    """ broadcast a cookie get request. """
    request = {"action": "getCookie", "url": url, "cookieName": cookiename}
    chrome.runtime.sendMessage(request, callback)


def sendSetMessage(cookie):
    """ broadcast a cookie set request. """
    request = {"action": "setCookie", "cookie": cookie}
    chrome.runtime.sendMessage(request)


sendGetMessage(PLAN_URL, COOKIE_NAME, fakeCallback)
